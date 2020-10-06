# ====> REACT APP <==== #

* __TypeScript__

* __Styled-Components__

* __React-Router-DOM__

## COMANDOS:

**_Iniciando o Projeto_**

 -Para criar um projeto React você deve usar o comando abaixo, o "--template typescript" define que o projeto sera feito com TS.

```bash
    yarn create react-app nome --template typescript
```

**_Incluindo o Styled-Componentes_**

 -Alem de adicionar o Styled-Componentes temos q adicionar o @types tambem

 ```bash
    yarn add styled-components @types/styled-components 
```

**_Incluindo o React-Router-DOM_**

 -Com isso vamos poder criar Rotas para a nossa aplicação

 ```bash
    yarn add react-router-dom @types/react-router-dom  
```

## ORGANIZANDO AS PASTAS

- Dentro da Pasta src devemos criar as pastas  **assets**, **pages** e **components**.

**assets**

nesta pasta ficara nossas imagens e os estilos globais

**pages**

nesta pasta ficara nossas paginas

**components**

nesta pasta ficara nossos componentes que serão usados em mais de uma pagina



## CONFIGURANDO AS ROTAS

- Dentro da pasta src devemos criar um arquivo chamado **routes.tsx**, nesse arquivo devemos importar de dentro do 'react-router-dom' os componentes { BrowserRouter, Route}, como no exemplo abaixo:

```bash

import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


// AQUI IMPORTAMOS AS NOSSAS PAGINAS:

import Landing from './pages/page1';
import TeacherForm from './pages/page2';

// CRIAMOS UMA FUNÇAO Routes, QUE DEVE RETORNAR O ELEMENTO <BrowserRouter> E TENDO COMO FILHO UM ELEMNTO <Route/> PARA CADA ROTA DESEJADA
// O ELEMENTO <Route/> DEVE RECEBER O PARAMETRO path="/rota-desejada"

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
```

### APLICANDO AS ROTAS

- Dentro do App.tsx devemos importar o Routes que acamanos de criar

```bash
import React from 'react';

import Routes from './routes';

function App() {
  return (
       <Routes />
  );
}

export default App;
```

### NAVEGANDO PELAS ROTAS

- Primeiro devemos importar o elemento { Link } do 'react-router-dom'

```bash
import { Link } from 'react-router-dom'
```
- Em seguida, dentro da funçao render, devemos chamar esse elemento passando o parametro to="rota desejada"

```bash
<Link to="/page2">
    <button>
        Botão
    </button>
</Link >
```

