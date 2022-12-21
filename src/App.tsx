import IArticle from "./IArticle";
import ArticlePreview from "./ArticlePreview";
import articleImage from './assets/drawers.jpg'
import authorImage from './assets/avatar-michelle.jpg'

function App() {

    const article: IArticle = {
        headline: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
        body: 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I\'ve got some simple tips to help you make any room feel complete.',
        author: 'Michelle Appleton',
        date: '28 Jun 2020',
        articleImage: articleImage,
        authorImage: authorImage,
    }

    return (<ArticlePreview article={article}/>)
}

export default App
