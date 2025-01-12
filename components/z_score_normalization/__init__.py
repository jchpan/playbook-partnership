from scipy.stats import zscore
from components.gene_count_matrix import gene_count_matrix, anndata_from_path
from components.file import upsert_file

def z_score_normalize_gene_count_matrix(m):
  df = anndata_from_path(m['url'])

  # z-score normalization
  df.X = zscore(df.X, axis=1)

  with upsert_file('.h5ad') as f:
    df.write_h5ad(f.file)

  return gene_count_matrix(f.url)

