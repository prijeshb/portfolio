# Project Agents & Roles

This repository is primarily a frontend client single-page application (SPA). Currently, there are no separate backend microservices managing content. All data is statically compiled from the components.

If expanded in the future, the architecture may include:
1. **Frontend Interface (Vite React Client)**: Handles all 3D canvas logic, scroll effects, and user state.
2. **Content Headless CMS Agent**: Resolves user project data dynamically to prevent redeployments on content changes.
