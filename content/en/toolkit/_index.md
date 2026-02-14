---
title: Research Toolkit
summary: Code Toolkit for Research
type: landing

cascade:
  - target:
      path: '{/toolkit/*/**}'
    type: docs
    params:
      show_breadcrumb: false

sections:
  - block: collection
    id: toolkits
    content:
      title: Code Toolkit for Research
      filters:
        tag: Toolkits
        kinds:
          - section
    design:
      # view: article-grid
      view: compact
      show_read_time: false
      show_date: false
      show_read_more: true
      columns: 3
      fill_image: false
---
