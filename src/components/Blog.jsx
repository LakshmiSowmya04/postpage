import React from "react";
import './Blog.css';
import logo from './download@2x-ClOlG4PY.png';

export default function Blog() {
    return (
        <div className="Blog">
            <div className="imgBanner">
                <br /><br />
                <img src={logo} alt="logo" className="bannerImage" />
            </div>
            <br />
            <div className="MidBlog">

                <div className="BlogLeft">
                    <br /><br /><br />
                    <button className="industryButton">Industries</button>
                    <h1>
                        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum,
                        a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,
                        added, and removed to make it nonsensical and improper Latin.
                        The first two words themselves are a truncation of dolorem ipsum ("pain itself").
                    </h1>
                    <div class="article-meta">
                        <span class="author">By Chemical Today.</span>
                        <span class="article-date">19 December 2023</span>
                        <div class="share-container">
                            <span class="share-text">Share</span>
                            <div class="circles">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="black-box"></div>
                    <span class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    <p >
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                    <p>
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                    <p >
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                    <p>
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                    <p >
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                    <p>
                        Cupidatat ipsum eu deserunt proident fugiat incididunt sunt laboris officia pariatur. Incididunt sunt ad sit aute laborum reprehenderit sunt dolor aute id. Duis aliqua eiusmod amet pariatur ex incididunt culpa labore dolore esse. Pariatur aliquip magna non ad Lorem consectetur amet.
                    </p> 
                 
                </div>


                <div className="BlogRight">
                    <br /><br /><br /><br /> <br />
                    <button className="latestUpdatesButton">Latest Updates</button>
                    <div className="texts">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is
                             simply dummy text of the printing and typesetting industry.
                        </p>
                        <hr />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is
                             simply dummy text of the printing and typesetting industry.
                        </p>
                        <hr />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is
                             simply dummy text of the printing and typesetting industry.
                        </p>
                        <hr />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry’s standard dummy text ever sinceorem Ipsum is
                             simply dummy text of the printing and typesetting industry.
                        </p>
                        <hr />
                    </div>
                    <div className="boxes">
                        <div className="box"></div>
                        <br />
                        <div className="box"></div>
                        <br />
                        <div className="box"></div>
                        <br />
                        <div className="box"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
