import React from 'react'
import { MetaNode } from '@/spec/metanode'
import python from '@/utils/python'
import { GeneCountMatrix } from '@/components/gene_count_matrix'


export const ZScoreNormalizeGeneCountMatrix = MetaNode.createProcess('ZScoreNormalizeGeneCountMatrix')
  .meta({
    label: 'Z Score Normalize A Gene Count Matrix',
    description: 'Z-score normalize a gene count matrix, return a gene count matrix',
  })
  .codec()
  .inputs({ matrix: GeneCountMatrix })
  .output(GeneCountMatrix)
  .resolve(async (props) => await python(
    'components.z_score_normalization.z_score_normalize_gene_count_matrix',
    { kargs: [props.inputs.matrix]  },
  ))
  .build()
