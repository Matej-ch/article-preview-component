import IArticle from "./IArticle";
import './ArticlePreview.scss'
import shareBtn from './assets/icon-share.svg'
import shareBtnWhite from './assets/icon-share-white.svg'
import iconFacebook from './assets/icon-facebook.svg'
import iconTwitter from './assets/icon-twitter.svg'
import iconPinterest from './assets/icon-pinterest.svg'
import {useState} from "react";

function ArticlePreview({article}: { article: IArticle }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={'modal-holder'}>
            <article className={'article-preview'} role="main">
                <picture className={'image-wrapper'}>
                    <img src={article.articleImage} alt={article.headline}/>
                </picture>

                <div className={'info-wrapper'}>
                    <h1 className={'headline'}>{article.headline}</h1>
                    <p className={'body'}>{article.body}</p>

                    <div className={'flex-group'}>
                        <img className={'author-picture'} src={article.authorImage} alt={article.authorImage}/>
                        <div>
                            <div className={'author-name'}>{article.author}</div>
                            <div className={'article-date'}>{article.date}</div>
                        </div>

                        <a className={'share-btn'} href="#" onClick={toggleModal}>
                            <img src={shareBtn} alt="Share button"/>
                        </a>
                    </div>

                </div>
            </article>

            {isOpen && <div className={'share-modal'}>
                <span>Share</span>
                <img src={iconFacebook} alt="Share on facebook icon"/>
                <img src={iconTwitter} alt="Share on twitter button"/>
                <img src={iconPinterest} alt="Share on pinterest button"/>
                <a className={'share-btn'} href="#" onClick={toggleModal}><img src={shareBtnWhite}
                                                                               alt="Share button"/></a>
                
                <div className="arrow-down"></div>
            </div>}
        </div>
    )
}

export default ArticlePreview