---
title: Research Toolkit
summary: Code Toolkit for Research
type: landing

cascade:
  - target:
      path: '{/toolkit/*/**}'
    type: docs
    params:
      show_breadcrumb: true

sections:
  - block: collection
    # id: courses
    content:
      title: Code Toolkit for Research
      filters:
        tag: Course
        kinds:
          - section
    design:
      view: article-grid
      show_read_time: false
      show_date: false
      show_read_more: true
      columns: 3
      fill_image: false
---
