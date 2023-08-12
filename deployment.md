# Deploying with GitHub Actions

This guide provides an overview of our deployment process for our website using [GitHub Actions](https://github.com/features/actions). By automating this process, we ensure that our documentation is consistently up-to-date and easily accessible.

### Why Using GitHub Actions?
Because it allows us to create workflows directly within this repository (integrated into our GitHub environment), eliminating the need for third-party CI/CD tools.

### Deployment
1. **Commit & Push**: Whenever changes are made to the **main** branch, GitHub Actions triggers the deployment workflow.
2. **Build**: With Docusaurus build command, the website is built based on our latest updates. This step converts the content into static files that can be served as a website.
3. **Deploy**: Once the build is successful, GitHub Actions pushes these static files to our designated **gh-pages** branch, from which GitHub Pages hosts our site.

Note: `.github/workflows` directory contains our GitHub Actions workflow files. The workflow responsible for deployment is defined here.

### Summary
With this automated process in place, contributors can focus on writing and improving content without worrying about the deployment process. Once changes are merged into the main branch, the website will be automatically updated.

If you encounter any issues or have questions about deployment process, please refer to the [Docusaurus guide](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions), or you can join us on our [Discord server](https://discord.gg/zTZg5MWS).
