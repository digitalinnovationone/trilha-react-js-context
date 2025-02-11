# React.JS | styled-components

## Objetivo

O objetivo do curso é ensinar como utilizar o Context API do React para gerenciar estados globais de forma eficiente, eliminando a necessidade de prop drilling. Você irá criar, fornecer e consumir contextos dentro de uma aplicação.

## Pré-requisitos

- Framework x Biblioteca
- Introdução ao React
- Componentes, propriedades e estados
- Introdução aos hooks
- Hook `useState`

## Executando o projeto

Instale as dependências do projeto

```
yarn
```

Execute o projeto em um servidor de desenvolvimento

```
yarn dev
```

# Introdução ao Context API

Geralmente, para compartilhar informações entre componentes, você usa props para passar dados do pai para o filho. Mas isso pode ficar complicado quando muitos componentes precisam da mesma informação ou quando você precisa repassar props por vários níveis. O Context resolve esse problema, permitindo que um componente pai compartilhe dados diretamente com qualquer componente abaixo dele na árvore, sem a necessidade de passar props manualmente em cada nível. Isso torna o código mais limpo e fácil de manter.

## Prop-drilling

Passar propriedades é uma ótima maneira de enviar dados de forma clara para os componentes que precisam deles na sua árvore de UI. Porém, isso pode se tornar trabalhoso e pouco prático quando você precisa passar uma prop por muitos níveis ou quando vários componentes precisam do mesmo dado. 

O componente pai mais próximo que tem essa informação pode estar muito distante dos que realmente precisam usá-la, e mover o estado para um nível tão alto pode causar o que chamamos de “prop drilling” — quando os dados precisam ser repassados por vários componentes intermediários sem necessidade.

Não seria ótimo se houvesse uma maneira de “teleportar” os dados diretamente para os componentes que precisam deles, sem precisar passar props? Com o recurso de Context do React, isso é possível!

## Context: uma alternativa ao uso de props

O Context permite que um componente pai forneça dados para toda a árvore abaixo dele. Ele pode ser útil em várias situações, como:

- **Temas:** Informar aos componentes se o usuário selecionou o tema light ou dark da aplicação.
- **Conta atual:** Muitos componentes podem precisar saber qual usuário está logado. Colocar essa informação em um contexto facilita o acesso em qualquer parte da árvore.
- **Roteamento:** Soluções de roteamento geralmente usam contexto para manter a rota atual. Isso é o que permite que os links saibam se estão ativos ou não.
- **Gerenciamento de estado:** Conforme o app cresce, o estado pode precisar ser compartilhado entre componentes distantes.

Muitas bibliotecas externas que instalamos nas nossas aplicações React, como o React Router e o Styled-Components, por exemplo, fazem o uso do Context para fornecer os recursos para os componentes do nosso app.

## Utilizando o Context em uma aplicação

Quando você precisa compartilhar informações com componentes de diferentes níveis na árvore da sua aplicação, você pode fazer o uso de contextos do React. Para isso, temos 3 passos de implementação:

1. Criar um contexto
2. Usar um contexto
3. Prover um contexto para os componentes

### Passo 1: Criando o contexto

Antes de tudo, você precisa criar um contexto. Ele será criado em um arquivo separado e deverá ser exportado para que os seus componentes, em outros arquivos, façam uso:

```jsx
export const SomeContext = createContext(defaultValue)
```

```jsx
import { createContext } from 'react';

export const ThemeContext = createContext('light');
```

- `createContext(defaultValue)`: Importe e faça uso dessa função do React para criar um contexto.
    - Deve ser chamada fora de qualquer componente.
    - Criada em um arquivo separado.
    - O contexto deve ser exportado para que os componentes possam fazer o uso.
- `defaultValue`: O **valor padrão** do Context é o valor que será usado caso não haja um **provedor** do Context acima do componente que está tentando acessar os dados. Ou seja, quando não houver um componente responsável por fornecer os dados (que chamamos de provider), o componente vai usar esse valor padrão.
    
    Se você não possuir um valor específico para esse caso, pode usar `null`. Esse valor padrão é fixo, ou seja, ele não muda ao longo do tempo, e serve como uma opção de "reserva" caso o contexto não tenha sido configurado corretamente em algum lugar da árvore de componentes.
    
- **Retorno:** O `createContext` retorna um objeto.
    - O próprio objeto de context não armazena nenhuma informação. Ele representa qual contexto outros componentes leem ou fornecem. O objeto de context possui algumas propriedades:
        - `SomeContext.Provider` permite que você forneça o valor do contexto para os componentes.
        - `SomeContext.Consumer` é uma alternativa (e raramente usada) para ler o valor do contexto.

### Passo 2: Provendo um contexto para os componentes

Um *Provider* é um componente especial que fornece um valor de contexto para todos os componentes abaixo dele na árvore de componentes do React. Ele permite que você compartilhe dados ou informações entre componentes sem a necessidade de passar props manualmente por cada nível da árvore.

Quando você utiliza um **provider**, você define o valor do contexto que será acessível para qualquer componente filho que utilizar esse contexto. Ou seja, os componentes dentro do provider podem "ler" esse valor e usá-lo diretamente, sem precisar de props intermediárias.

Em resumo, o **provider** é quem "oferece" o dado, e os componentes filhos "consomem" esse dado, tornando a gestão de estados e informações mais eficiente em aplicações maiores.

Envolva seus componentes em um Provider de Context para especificar o valor deste contexto para todos os componentes dentro.

```jsx
function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}
```

A propriedade `value` do Provider é o valor que você deseja passar para todos os componentes que irão consumir esse contexto, não importa em qual nível da árvore de componentes ele está. O valor do contexto pode ser **de qualquer tipo**.

### Passo 3: Usando um contexto

Agora, sua aplicação está apta para ler os dados do contexto em um componente que está dentro do contexto especificado. Para consumir os dados *providos* pelo contexto, você utilizará o hook `useContext` para pegar essas informações diretamente no componente que necessita delas.

```jsx
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme} />;
}
```

Antes do hook `useContext` existir, a forma de consumir um contexto era dessa maneira:

```jsx
function Button() {
  // 🟡 Não recomendado
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button className={theme} />
      )}
    </ThemeContext.Consumer>
  );
}
```

# Boas práticas

## Criando um componente de Provider separadamente

Uma boa prática no uso do **Context API** é criar um componente de **Provider** separado, ao invés de colocar diretamente o `Provider` dentro de um componente específico. Isso traz vários benefícios:

1. Reusabilidade de código e fácil manutenção
2. Organização do código
3. Isolamento da lógica do contexto
4. Facilidade para configurações e modificações

```jsx
// ThemeContext.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
```

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import SomeComponent from './SomeComponent';

const App = () => {
  return (
    <ThemeProvider>
      <SomeComponent />
    </ThemeProvider>
  );
};

export default App;
```

## Criando um hook customizado para consumir o contexto

Criar um **hook customizado** para consumir o contexto é uma excelente prática, pois torna o código mais limpo, reutilizável e fácil de manter. Em vez de chamar diretamente o `useContext` nos componentes, você pode encapsular essa lógica em um hook, o que simplifica o acesso ao contexto e reduz o acoplamento entre os componentes e a implementação do contexto.

```jsx
// useTheme.js
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export default useTheme;
```

```jsx
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import useTheme from './useTheme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
```