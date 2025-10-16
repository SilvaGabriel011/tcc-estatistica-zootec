"""Módulo de análises estatísticas"""
import pandas as pd
import numpy as np
from scipy import stats
from scipy.stats import kstest, norm, shapiro, chi2_contingency, ttest_ind, mannwhitneyu
from statsmodels.stats.multicomp import pairwise_tukeyhsd

def means_ci(df, group, y='PREÇO POR KG', confidence=0.95):
    if group not in df.columns or y not in df.columns:
        return pd.DataFrame()
    df_clean = df[[group, y]].dropna()
    results = []
    for name, group_data in df_clean.groupby(group):
        values = group_data[y]
        n = len(values)
        mean = values.mean()
        std = values.std(ddof=1)
        se = std / np.sqrt(n)
        t_crit = stats.t.ppf((1 + confidence) / 2, n - 1)
        ci_lower = mean - t_crit * se
        ci_upper = mean + t_crit * se
        results.append({
            'Grupo': name, 'N': n, 'Média': mean, 'DP': std,
            'EP': se, 'IC 95% Inf': ci_lower, 'IC 95% Sup': ci_upper
        })
    return pd.DataFrame(results)

def anova_one_way(df, group, y='PREÇO POR KG'):
    if group not in df.columns or y not in df.columns:
        return None, None, None
    df_clean = df[[group, y]].dropna()
    groups = [group_data[y].values for name, group_data in df_clean.groupby(group)]
    if len(groups) < 2:
        return None, None, None
    F, p = stats.f_oneway(*groups)
    grand_mean = df_clean[y].mean()
    ss_total = np.sum((df_clean[y] - grand_mean) ** 2)
    ss_between = 0
    for name, group_data in df_clean.groupby(group):
        group_mean = group_data[y].mean()
        group_n = len(group_data)
        ss_between += group_n * (group_mean - grand_mean) ** 2
    eta_squared = ss_between / ss_total if ss_total > 0 else 0
    return F, p, eta_squared

def kruskal_one_way(df, group, y='PREÇO POR KG'):
    if group not in df.columns or y not in df.columns:
        return None, None, None
    df_clean = df[[group, y]].dropna()
    groups = [group_data[y].values for name, group_data in df_clean.groupby(group)]
    if len(groups) < 2:
        return None, None, None
    H, p = stats.kruskal(*groups)
    n = len(df_clean)
    k = len(groups)
    epsilon_squared = H / ((n ** 2 - 1) / (n + 1))
    return H, p, epsilon_squared

def normality_lilliefors(series):
    series_clean = series.dropna()
    if len(series_clean) < 3:
        return None, None
    mean = series_clean.mean()
    std = series_clean.std(ddof=1)
    D, p = kstest(series_clean, lambda x: norm.cdf(x, loc=mean, scale=std))
    return D, p

def summary_tests(df, y='PREÇO POR KG'):
    factors = []
    possible_factors = ['RAÇA', 'TIPO GADO GORDO', 'ERA', 'TRIMESTRE']
    for factor in possible_factors:
        if factor in df.columns:
            factors.append(factor)
    results = []
    for factor in factors:
        F, p_anova, eta_sq = anova_one_way(df, factor, y)
        H, p_kw, eps_sq = kruskal_one_way(df, factor, y)
        results.append({
            'Fator': factor,
            'F': F if F is not None else np.nan,
            'p (ANOVA)': p_anova if p_anova is not None else np.nan,
            'η²': eta_sq if eta_sq is not None else np.nan,
            'H': H if H is not None else np.nan,
            'p (Kruskal-Wallis)': p_kw if p_kw is not None else np.nan,
            'ε²': eps_sq if eps_sq is not None else np.nan
        })
    return pd.DataFrame(results)

def descriptive_stats(series):
    series_clean = series.dropna()
    return {
        'N': len(series_clean),
        'Média': series_clean.mean(),
        'DP': series_clean.std(ddof=1),
        'Mediana': series_clean.median(),
        'Mínimo': series_clean.min(),
        'Máximo': series_clean.max()
    }

# =============================================================================
# NEW ADVANCED STATISTICAL TESTS
# =============================================================================

def tukey_hsd_test(df, group, y='PREÇO POR KG', alpha=0.05):
    """Teste de Tukey HSD para comparações múltiplas post-hoc."""
    if group not in df.columns or y not in df.columns:
        return None
    
    df_clean = df[[group, y]].dropna()
    
    if len(df_clean[group].unique()) < 2:
        return None
    
    try:
        tukey_result = pairwise_tukeyhsd(df_clean[y], df_clean[group], alpha=alpha)
        return tukey_result
    except Exception:
        return None

def chi_square_test(df, var1, var2):
    """Teste qui-quadrado para associação entre variáveis categóricas."""
    if var1 not in df.columns or var2 not in df.columns:
        return None
    
    df_clean = df[[var1, var2]].dropna()
    
    # Criar tabela de contingência
    contingency_table = pd.crosstab(df_clean[var1], df_clean[var2])
    
    if contingency_table.shape[0] < 2 or contingency_table.shape[1] < 2:
        return None
    
    try:
        chi2, p_value, dof, expected = chi2_contingency(contingency_table)
        
        # Cramér's V (medida de associação)
        n = contingency_table.sum().sum()
        cramers_v = np.sqrt(chi2 / (n * (min(contingency_table.shape) - 1)))
        
        return {
            'chi2': chi2,
            'p_value': p_value,
            'dof': dof,
            'cramers_v': cramers_v,
            'contingency_table': contingency_table,
            'expected_frequencies': expected
        }
    except Exception:
        return None

def shapiro_wilk_test(series):
    """Teste de Shapiro-Wilk para normalidade."""
    series_clean = series.dropna()
    
    if len(series_clean) < 3 or len(series_clean) > 5000:
        return None
    
    try:
        statistic, p_value = shapiro(series_clean)
        return {
            'statistic': statistic,
            'p_value': p_value,
            'is_normal': p_value > 0.05,
            'interpretation': 'Normal' if p_value > 0.05 else 'Não-normal'
        }
    except Exception:
        return None

def mann_whitney_test(df, group, y='PREÇO POR KG'):
    """Teste de Mann-Whitney U para comparação de dois grupos."""
    if group not in df.columns or y not in df.columns:
        return None
    
    df_clean = df[[group, y]].dropna()
    groups = df_clean[group].unique()
    
    if len(groups) != 2:
        return None
    
    group1_data = df_clean[df_clean[group] == groups[0]][y]
    group2_data = df_clean[df_clean[group] == groups[1]][y]
    
    if len(group1_data) < 3 or len(group2_data) < 3:
        return None
    
    try:
        statistic, p_value = mannwhitneyu(group1_data, group2_data, alternative='two-sided')
        
        # Tamanho do efeito (r de Rosenthal)
        n1, n2 = len(group1_data), len(group2_data)
        z = stats.norm.ppf(p_value / 2)
        r = abs(z) / np.sqrt(n1 + n2)
        
        return {
            'statistic': statistic,
            'p_value': p_value,
            'group1': groups[0],
            'group2': groups[1],
            'n1': n1,
            'n2': n2,
            'effect_size_r': r,
            'interpretation': 'Diferença significativa' if p_value < 0.05 else 'Sem diferença significativa'
        }
    except Exception:
        return None

def t_test_independent(df, group, y='PREÇO POR KG'):
    """Teste t para amostras independentes."""
    if group not in df.columns or y not in df.columns:
        return None
    
    df_clean = df[[group, y]].dropna()
    groups = df_clean[group].unique()
    
    if len(groups) != 2:
        return None
    
    group1_data = df_clean[df_clean[group] == groups[0]][y]
    group2_data = df_clean[df_clean[group] == groups[1]][y]
    
    if len(group1_data) < 3 or len(group2_data) < 3:
        return None
    
    try:
        # Teste de Levene para homogeneidade de variâncias
        levene_stat, levene_p = stats.levene(group1_data, group2_data)
        equal_var = levene_p > 0.05
        
        # Teste t
        t_stat, p_value = ttest_ind(group1_data, group2_data, equal_var=equal_var)
        
        # Cohen's d (tamanho do efeito)
        pooled_std = np.sqrt(((len(group1_data) - 1) * group1_data.var() + 
                             (len(group2_data) - 1) * group2_data.var()) / 
                            (len(group1_data) + len(group2_data) - 2))
        cohens_d = (group1_data.mean() - group2_data.mean()) / pooled_std
        
        return {
            't_statistic': t_stat,
            'p_value': p_value,
            'group1': groups[0],
            'group2': groups[1],
            'n1': len(group1_data),
            'n2': len(group2_data),
            'mean1': group1_data.mean(),
            'mean2': group2_data.mean(),
            'std1': group1_data.std(),
            'std2': group2_data.std(),
            'equal_variance': equal_var,
            'levene_p': levene_p,
            'cohens_d': cohens_d,
            'interpretation': 'Diferença significativa' if p_value < 0.05 else 'Sem diferença significativa'
        }
    except Exception:
        return None

def comprehensive_statistical_analysis(df, y='PREÇO POR KG'):
    """Análise estatística abrangente dos dados."""
    results = {}
    
    # Testes de normalidade
    if y in df.columns:
        shapiro_result = shapiro_wilk_test(df[y])
        if shapiro_result:
            results['normality'] = shapiro_result
    
    # Análise por fatores categóricos
    categorical_factors = ['RAÇA', 'TIPO GADO GORDO', 'ERA', 'TRIMESTRE', 'ESTADO']
    available_factors = [f for f in categorical_factors if f in df.columns]
    
    for factor in available_factors:
        factor_results = {}
        
        # ANOVA e Kruskal-Wallis
        anova_f, anova_p, eta_sq = anova_one_way(df, factor, y)
        kw_h, kw_p, eps_sq = kruskal_one_way(df, factor, y)
        
        factor_results['anova'] = {
            'f_statistic': anova_f,
            'p_value': anova_p,
            'eta_squared': eta_sq
        }
        
        factor_results['kruskal_wallis'] = {
            'h_statistic': kw_h,
            'p_value': kw_p,
            'epsilon_squared': eps_sq
        }
        
        # Teste de Tukey HSD (se ANOVA significativa)
        if anova_p and anova_p < 0.05:
            tukey_result = tukey_hsd_test(df, factor, y)
            if tukey_result:
                factor_results['tukey_hsd'] = tukey_result
        
        # Testes para comparação entre grupos (se apenas 2 grupos)
        unique_groups = df[factor].unique()
        if len(unique_groups) == 2:
            t_test_result = t_test_independent(df, factor, y)
            mw_result = mann_whitney_test(df, factor, y)
            
            if t_test_result:
                factor_results['t_test'] = t_test_result
            if mw_result:
                factor_results['mann_whitney'] = mw_result
        
        results[factor] = factor_results
    
    # Testes de associação entre variáveis categóricas
    categorical_vars = [col for col in df.columns if df[col].dtype == 'object']
    for i, var1 in enumerate(categorical_vars):
        for var2 in categorical_vars[i+1:]:
            chi2_result = chi_square_test(df, var1, var2)
            if chi2_result:
                results[f'{var1}_vs_{var2}'] = chi2_result
    
    return results
