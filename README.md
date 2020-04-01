<p align="center"><a href="https://formql.io"><img src="https://formql.io/assets/formql-logo-github.png" alt="FormQL - A framework for bulding dynamic forms" style="height:200px"></a></p>

FormQL is a framework for building dynamic forms in Angular. It comes with an editor that offers a drag and drop functionality to make it easier for non technical users to maintain the forms as well as an extensible APIs for allowing developers to extend the functionality with custom components. 

FormQL comes with the following features: 

- **CSS grid templating**: define the structure of your form with CSS grid standards.
- **Dynamic validation**: add rules to dynamically make fields mandatory, read only or hidden.
- **Calculated fields**: add logic to perform calculation based on the values in other fields.
- **Field formatting with Text-Mask**: includes the ability to format fields such as currencies and dates.
- **Extensible**: ability to extend the forms with your own custom components.

# Demo
- Formql.io: https://formql.io/example/#/form/contactInfo/edit
- Stackblitz: https://stackblitz.com/edit/formql-example-material

# Stackblitz Demos (also avaiable in ./examples in this repo)
- https://stackblitz.com/@formqlx

# Documentation
https://github.com/formql/formql/wiki

# Libraries
Core libraries
- [`@formql/core`](https://www.npmjs.com/package/@formql/core)
- [`@formql/editor`](https://www.npmjs.com/package/@formql/editor)

Bundles
- [`@formql/material`](https://www.npmjs.com/package/@formql/material)

# How to run this repo
```bash
git clone https://github.com/formql/formql.git
cd formql
npm install
npm start
```
if you want to use the libraries from your local environemnt, replace the @formql instances with the following in your package.json...
```json
"@formql/core": "file:dist/formql/formql-core-0.4.0.tgz",
"@formql/editor": "file:dist/formql-editor/formql-editor-0.4.0.tgz",
"@formql/material": "file:dist/formql-material/formql-material-0.4.0.tgz",
```
...and then run the commands
```bash
npm run package_all
npm start
```

- Edit mode: http://localhost:4200/#/form/contactInfo/edit
- View mode: http://localhost:4200/#/form/contactInfo

## Contact us
- Website - [https://formql.io](https://formql.io/)
- Twitter - [@formql_io](https://twitter.com/formql_io)

## License
FormQL is [MIT licensed](LICENSE).

