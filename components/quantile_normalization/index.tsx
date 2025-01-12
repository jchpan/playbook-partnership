import React from 'react'
import { MetaNode } from '@/spec/metanode'
import python from '@/utils/python'
import { GeneCountMatrix } from '@/components/gene_count_matrix'


export const QuantileNormalizeGeneCountMatrix = MetaNode.createProcess('QuantileNormalizeGeneCountMatrix')
  .meta({
    label: 'Quantile Normalize A Gene Count Matrix',
    description: 'Quantile normalize a gene count matrix, return a gene count matrix',
  })
  .codec()
  .inputs({ matrix: GeneCountMatrix })
  .output(GeneCountMatrix)
  .resolve(async (props) => await python(
    'components.quantile_normalization.quantile_normalize_gene_count_matrix',
    { kargs: [props.inputs.matrix]  },
  ))
  .build()
