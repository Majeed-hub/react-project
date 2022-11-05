import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
// import { Content } from './DetailArticles.elements';
import { Container, ArticleContent, Heading } from "./DetailArticles.elements";
import {
  DetailArticle1,
  DetailArticle2,
  DetailArticle3,
  DetailArticle4,
} from "../Data/InfoArticleDetailed";

const DetailedArticles = () => {
 const {id} = useParams();
    return (
      <>
        {id === '1' && 
          <Container>
            <Heading>{DetailArticle1.title}</Heading>
            <ArticleContent>{DetailArticle1.content}</ArticleContent>
          </Container>
        }
        {id === '2' && (
          <Container>
            <Heading>{DetailArticle2.title}</Heading>
            <ArticleContent>{DetailArticle2.content}</ArticleContent>
          </Container>
        )}
        {id === '3' && (
          <Container>
            <Heading>{DetailArticle3.title}</Heading>
            <ArticleContent>{DetailArticle3.content}</ArticleContent>
          </Container>
        )}
        {id === '4' && (
          <Container>
            <Heading>{DetailArticle4.title}</Heading>
            <ArticleContent>{DetailArticle4.content}</ArticleContent>
          </Container>
        )}
      </>
    );
}
 
export default DetailedArticles;