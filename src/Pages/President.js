import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';
import Header from '../Header';
import Footer from '../Footer';

class President extends Component {
  render() {
    return (
    <div>
        <Header cssFilter="parallax filter filter-gradient-black" cssImg="image bg-img-president" headText="Message from the President of" />

        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2 className="glico-color">Message from the President</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-5">
                        <h4><b>It All Started with Glico Caramel</b></h4> <br />
                        <p className="description-custom">
                        Ever since the launch in 1922 of the nutritious, fortified Glico caramel in its distinctive red box, the business activities of Ezaki Glico Co., Ltd. adhered to the corporate philosophy of "Enhancing Public Health Through Food." Upon the 70th anniversary of the Glico Group in 1992, this same spirit and dedication was incorporated into the revised corporate philosophy of "A Wholesome Life in the Best of Taste." <br /><br />
                        Glico caramel – the company's first product – incorporates the innovative creativeness of Mr. Ri-ichi Ezaki, the company's founder. Ever since the beginning, the entire staff has likewise been heartily dedicated to further enhancing people's health and quality of life. This has led to the expansion of business lines beyond confectionery to include ice cream products, processed foods, desserts, milk products, baby formula, food ingredients, and raw materials for cosmetic and health products.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <center>
                        <img alt="Katsuhisa Ezaki" src="https://www.glico.com/assets/images/original/10541"/> <br />
                        <p className="description-custom">Katsuhisa Ezaki President & CEO Ezaki Glico Co.,Ltd</p>
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8"> <br />
                        <h4><b>The 3 Fields of "Heart, Health, and Life"</b></h4> <br />
                        <p className="description-custom">
                        Heart: The Glico Group strives to make heart-to-heart connections by contributing to a more comfortable, interesting, joyful, and pleasant way of life for all. <br /><br />
                        In line with his firm belief that "Both nourishment and playtime activity are essential to a wholesome childhood", our founder, Mr. Ri-ichi Ezaki, felt that Glico caramel and toys go well together. Over the years, the cumulative total number of toys packaged with Glico caramel has surpassed five billion. The fact that these toys are sought after and treasured can be considered proof of the company's successful efforts to help nurture the creative mind of children while contributing to the joy of life. <br /><br />
                        Health: The Glico Group supports wholesome growth by incorporating the results of ongoing scientific research related to health. Through our products and services, we encourage a healthy and energetic way of life. <br /><br />
                        When Ri-ichi Ezaki recognized that the glycogen contained in the Oyster br /oth made in his native Saga Prefecture1) promotes good health, he realized that it would be especially beneficial to the wellbeing and growth of children. In fact, this was the idea behind incorporating glycogen as an ingredient in a caramel product – a confection especially loved by children. Such innovative thinking is what br /ought about the foundation our company and the starting point of the Glico Way. <br /><br />
                        Life: The Glico Group is able to develop, manufacture, and distribute high quality food products and ingredients as a result of researching food as a vital human resource. <br /><br />
                        One example is rice flour. We have contributed to expanding the range of its usage by enhancing its wholesomeness and incorporating it as an ingredient in the production of br /ead, noodles, and confectionery. This in turn promotes the local production and consumption of rice so that the nation's rate of food self-sufficiency is improved. <br /><br />
                        Heart, Health and Life. Since our foundation, such ideologies have been passed down generation-to-generation and have inspired the team members involved. This is what the Glico Group, as a whole, focuses upon. <br /><br />
                        1) Saga Prefecture is located in the northwest part of Kyushu – the third largest island of Japan. The western part of the prefecture is famous for the production of ceramics and porcelain – particularly the towns of Karatsu, Imari, and Arita.
                        </p> <br />
                        <h4><b>The Glico Spirit: ACHIEVE INNOVATION! CHEERFULNESS! THE THRILL OF THE POSITIVE!</b></h4> <br />
                        <p className="description-custom">
                        It is our belief that unless we find enjoyment and excitement in our own innovative creations, we will not be able to communicate to our customers the excitement of tastiness, the joy of good health, or the enormity of life. <br /><br />
                        The spirit of the Philosophy of Glico is conveyed not only through quality products, but also through positive actions. We continually strive for improved dietary habits, the advancement of sports and cultural activities, and preservation of natural environment. In addition, we actively support the "Mother & Child Health Foundation" that makes significant nation-wide contributions to the health of mothers and children through comprehensive research. <br /><br />
                        In keeping with a growing awareness of the need to take steps to preserve the environment as well as to revitalize human nature, the Glico Group continually seeks ways to make positive contributions to the health and wellbeing of people of all ages around the globe through our products and activities. We continually seek new ways to contribute positively to "A Wholesome Life in the Best of Taste."
                        </p> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-5">
                        <h4><b>Deliver Smiles to Everyone</b></h4> <br />
                        <p className="description-custom">
                        From the launch of the nutritious Glico caramel in its distinctive red box, we have thought deeply about the role our food products play. What we visualize is a family gathered around a dinner table. Every member of that family – especially the children – is laughing and smiling with joy while enjoying the meal. Smiles like theirs are what we would like to deliver to everyone through the products we create innovatively. This is the happiness people can achieve through wholesome, tasteful food.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <center><img alt="Glico Company" src="https://www.glico.com/assets/images/original/8437" width="260"/></center>
                        <br /><br /><br />
                    </div>
                </div>
            </div> <br /><br /><br />
        </div>

        <Footer />
    </div>
    );
  }
}

export default President;
