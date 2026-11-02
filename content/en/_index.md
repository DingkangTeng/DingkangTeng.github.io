---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I’m a PhD student in Geography at the University of Tennessee, Knoxville, where I tend to explore the deeper theoretical connections between transportation and mobility. My research focuses on how the structure of networks, the patterns of flow, and the logic of spatial organization together explain the ways people and places are linked or kept apart.

        I work with spatial analysis and network analysis, always circling back to one central question: How do the fundamental properties of transport systems govern who can move, where they can reach, and what they can access?
    design:
      columns: '1'
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publications
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2
  - block: collection
    id: papers
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        featured_only: false
        # exclude_featured: false
    design:
      view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - events
  #   design:
  #     view: card
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: blog
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  - block: geography-map
    id: geography
    content:
      title: '🌍 My Geography'

      map:
        height: 520
        scroll_wheel_zoom: true
        fit_bounds: true
        max_fit_zoom: 4

        markers:
          - name: 'Huazhong Agricultural University'
            coordinates: [30.4762, 114.3524]
            color: '#16a34a'
            label_position: top
            label_offset: [0, -10]

            details:
              - label: 'Degree'
                value: 'Bachelor'
              - label: 'Major'
                value: 'Land Resource Management'
              - label: 'Period'
                value: '2015–2019'
              - label: 'Location'
                value: 'Wuhan, China'

          - name: 'The Hong Kong Polytechnic University'
            coordinates: [22.3045, 114.1797]
            color: '#2563eb'
            label_position: bottom
            label_offset: [0, 10]

            details:
              - label: 'Degree'
                value: 'Master'
              - label: 'Major'
                value: 'Urban Informatics and Smart Cities'
              - label: 'Period'
                value: '2024–2026'
              - label: 'Location'
                value: 'Hong Kong, China'

          - name: 'University of Tennessee, Knoxville'
            coordinates: [35.9517, -83.9327]
            color: '#f97316'
            label_position: right
            label_offset: [12, 0]

            details:
              - label: 'Degree'
                value: 'PhD'
              - label: 'Major'
                value: 'Geography'
              - label: 'Period'
                value: '2026–Present'
              - label: 'Location'
                value: 'Knoxville, Tennessee, USA'
  
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
