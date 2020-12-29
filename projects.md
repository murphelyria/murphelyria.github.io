---
title: Projects
---
{% for project in site.projects %}
### Project [{{ project.title }}]({{ project.url }})
{% endfor %}