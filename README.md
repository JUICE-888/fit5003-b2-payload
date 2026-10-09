## B.2 Reflected XSS
- File: `app/templates/search.html`
- Removed the Jinja `| safe` filter from the reflected search query output.
- The search query is now rendered with automatic escaping, so injected script tags are displayed as text instead of being executed.
