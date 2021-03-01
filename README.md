# Gama Bank - Accenture Academy 2.0 <br/><br/>


<p align="center">

  <img src="https://github.com/Reinaldooo/gama-bank/blob/readme-md/src/assets/reaccenture-equipe.png" alt="Unform"/>
</p>
<br/><br/>




## Summary

  - [Gama Bank Project](#gama-bank-project)
  - [Layout](#layout)
  - [Publication ](#publication )
  - [Business Objectives](#business-objectives)
  - [Installation](#installation) 
  - [Frontend built With ](#frontend-built-with)
  - [Project requirements](#project-requirements)  
  - [Architecture Atomic Design](#architecture-atomic-design)
  - [Work Strategy](#work-strategy)  
  - [Thanks](#thanks)
  - [Credits](#credits)
  - [Contact Linkedin](#contact-linkedin)
  - [Mobile Project](https://github.com/Reinaldooo/gama-bank-mobile)

  

<br/><br/>
## Gama Bank Project 

This is a frontend project, developed in the selection process of Accenture February / 2021. 
It was four weeks of intense studies in Frontend web and mobile with React and React Native, but the learning went far beyond the technical.
The dedication of Professor Douglas and the partnership of the participants brought an exchange of rich experiences that resulted in many learnings and cooperation in teamwork. 
We thank GamaAcademy and Accenture for this opportunity and the result provided ...
<br/><br/>


<p align="center">

  <img src="https://github.com/Reinaldooo/gama-bank/blob/readme-md/src/assets/dashboard-consulta.png" alt="Gama Bank Page"/>

 
  - [Let's go!!!](https://reaccenture-bank.netlify.app/) Check out the project in full. 
 
</p><br/><br/>


## Layout

 <br/>

  - [Figma](https://www.figma.com/file/tdrTDIY2hal9Ky4fbTvBl2/DesafioGamaAccenture_1_2-desktop?node-id=0%3A1) - Online prototyping tool

<br/>

  ### Layout and API credit

  - Gama Academy

<br/><br/>



## Publication 

The project was published on the Netlify platform:
- [Netlify](https://reaccenture-bank.netlify.app/)

<br/><br/>


## Business Objectives

<p align="center">
  <img src="https://github.com/Reinaldooo/gama-bank/blob/readme-md/src/assets/Career%20Planning%20Mind%20Map.gif" alt="Gama Bank Page"/>

 
<br/><br/>


## Installation

To run this project on your computer, you need to install NodeJS:
- [NodeJS](https://nodejs.org/en/download/)


To install the necessary dependencies, issue the command:
```
npm install 
```

And to run the application:
`npm start`


The application will run on the local server on standard port 3000:

Runs the app in the development mode.\
Open http://localhost:3000to view it in the browser.

<br/><br/>



## Frontend built with 

  - [React](https://pt-br.reactjs.org/)  - A JavaScript library for building user interfaces
  - [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
  - [TypeScript](https://www.typescriptlang.org/) - TypeScript is an open-source language which builds on JavaScript
  - [Styled-components](https://styled-components.com/) - Visual primitives for the component age
  - [Unform](https://unform.dev/) - Unform is a performance-focused API for creating powerful forms experiences for both React and React Native
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components
  - [Yup](https://www.typescriptlang.org/) - Yup is a simple object schema validator I came across recently. It is inspired by Joi, but smaller than that, so it is probably a better fit to the client side

<br/><br/>



## Project requirements 

   ### (Routes)

- [x]  **"/"** Returns home
{
   Gama Bank is a project of our students
}
- [x]  "**/login**" Returns the user access page to the client account dashboard
- [x]  "**//forgot-password**nome/[NOME]" Returns a password page

   ### (Private route)

- [x]  "dashboard/[ID]" Returns the access page to the dashboard


<br/><br/>


## Architecture Atomic Design

```
\--📂 GAMA-BANK
			\--📂 .vscode
			    | settings.json			 
			\--📂 public
			    | _redirects
			    | favicon.png
			    | index.html
			    | robots.txt
			\--📂src
			    |
			    📂---assets
			        |    toastContext.tsx
			    📂---routes
			    📂---services
			        |    api.ts
			        |    auth.ts
			    📂---store
				    📂---modules
					    📂---accounts
					    📂---actions						
        			        |    index.ts
			    📂---utils
			        |   getValidationErrors.ts
			    📂---views
				    📂---components
					    📂---ButtonGeneric
                			        |    index.tsx
                			        |    styles.tsx
					    📂---Header
                			        |    index.tsx
                			        |    styles.tsx
					    📂---InputPrimary
                			        |    index.tsx
                			        |    styles.tsx
					    📂---SummaryCards
                			        |    index.tsx
                			        |    styles.tsx
					    📂---ToastContainer
    					    📂---Toast
                			        |    index.tsx
                			        |    styles.tsx
						📂---Tooltip
                                		        |   index.tsx
                                		        |   styles.tsx
					    📂---WhiteCardDashboard
                                		        |   index.tsx
                                		        |   styles.tsx
					    📂---WhiteCardLoginRegister
                                		        |   index.tsx
                                		        |   styles.tsx
				    📂---pages
					    📂---CardError
                        		        |   index.tsx
                        		        |   styles.tsx
					    📂---Dashboard
            					    📂---Deposit
                                		        |   index.tsx
                                		        |   styles.tsx
            					    📂---Sidenav
                                		        |   index.tsx
                                		        |   styles.tsx
            					    📂---Transfer
                                		        |   index.tsx
                                		        |   styles.tsx
					    📂---Landing
            					    📂---SectionA
                                		        📂---CreateAccountForm
                                            		        |   styles.tsx
            					    📂---SectionB
                                		        |   index.tsx
                                		        |   styles.tsx
            					    📂---SectionC
                                		        |   index.tsx
                                		        |   styles.tsx
            					    📂---SectionD
                                		        |   index.tsx
                                		        |   styles.tsx
            					    📂---SectionE
                                		        |   index.tsx
                                		        |   styles.tsx
					    📂---Login
                                		        |   index.tsx
                                		        |   styles.tsx
					    📂---PasswordPage
                                		        |   index.tsx
                                		        |   styles.tsx							
		        |   App.txs
		        |   index.tsx
		        |   react-app-env.d.ts								
	|   .gitignore
	|   package.json
	|   README.md
	|   tsconfig.json
	|   yarn.lock 
```
<br/><br/>


## Work Strategy

<p align="center">

  <img src="https://github.com/Reinaldooo/gama-bank/blob/readme-md/src/assets/work-strategy.png" alt="Gama Bank Page"/>


<br/><br/>


## Thanks

* Teacher - Douglas Morais
* Mentor - Renato Alencar
* Yellow Belt - Camila Cardoso
* To all partners participating in the Accenture Academy 2.0 ReactJS / React Native - class 2021
<br/>

 [<p align="center">
  <img src="https://github.com/Reinaldooo/gama-bank/blob/master/src/assets/gama-academy-logo-horizontal-verde-branco1%201.png" alt="Logo GamaAcademy" width="150" heigth="35"/>](https://www.gama.academy/)
  </p>
 
 [<p align="center">
  <img src="https://github.com/Reinaldooo/gama-bank/blob/readme-md/src/assets/accenture.png" alt="Logo Accenture" width="150" heigth="35"/>](https://www.accenture.com/br-pt)
 </p>

<br/><br/>

## Credits

<img src="https://github.com/Reinaldooo/gama-bank/blob/master/src/assets/equipe-reaccenture.png" /></a>

<br/>

## Contact Linkedin

 
* Emanuel Moura - https://www.linkedin.com/in/emanmoura/ 
* Jequélia Santana - https://www.linkedin.com/in/jequelia-santana-680773173/
* Laís Lopes - https://www.linkedin.com/in/laismaas/
* Rafael Roma - https://www.linkedin.com/in/rafaelproma/
* Reinaldo Trindade - https://www.linkedin.com/in/reinaldo-trindade/


