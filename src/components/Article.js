import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Article() {
  return (
    <article>
      <Switch>
        <Route path="/news">
          <h1>Новости</h1>
          <p>Сегодня в университете прошла студенческая конференция.</p>
        </Route>
        <Route path="/about">
          <h1>Южный федеральный университет</h1>
        </Route>
        <Route path="/contacts">
          <h1>+7 (906) 498-73-35</h1>
        </Route>
        <Route path="*">
          <h1>404 — Страница не найдена</h1>
        </Route>
      </Switch>
    </article>
  );
}

export default Article;