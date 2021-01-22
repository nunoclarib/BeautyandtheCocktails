import React, {Component} from "react";
import './App.css';
import { Link } from "react-router-dom";

import foto from './imgs/white.jpg';
import menina from './imgs/menina.png'
import um from './imgs/um.png'
import dois from './imgs/dois.png'



class Random extends Component {

    constructor(props){
        super (props)
        this.state={

            borda1:"5px solid #cc5ba6",
            borda2:"5px solid #cc5ba6",
            borda3:"5px solid #cc5ba6",
            borda4:"5px solid #cc5ba6",
            borda5:"5px solid #cc5ba6",
            borda6:"5px solid #cc5ba6",
            borda7:"5px solid #cc5ba6",
            borda8:"5px solid #cc5ba6",
            borda9:"5px solid #cc5ba6",

            selected: false,

            makeup1: "",
            makeup2:"",
            makeup3:"",
            makeup4:"",
            makeup5:"",

            cocktail0:"",
            cocktail1:"",
            cocktail2:"",
            cocktail3:"",
            cocktail4:"",
            cocktail5:"",
            cocktail6:"",
            cocktail7:"",
            cocktail8:"",

            
            lipstick: foto,
            l_id:"",
            l_marca:"",
            l_tipo:"",
            l_nome:"",
            l_price:"",
            l_description:"",
            l_link:"",
            l_price_sign:"",
            l_category:"",
            l_tags:"",
            l_colors: "",
            
            
            blush: foto,
            b_id:"",
            b_marca:"",
            b_tipo:"",
            b_nome:"",
            b_price:"",
            b_description:"",
            b_link:"",
            b_price_sign:"",
            b_category:"",
            b_tags:"",
            b_colors: "",

            foundation: foto,
            f_id:"",
            f_marca:"",
            f_tipo:"",
            f_nome:"",
            f_price:"",
            f_description:"",
            f_link:"",
            f_price_sign:"",
            f_category:"",
            f_tags:"",
            f_colors: "",

            eyeliner: foto,
            e_id:"",
            e_marca:"",
            e_tipo:"",
            e_nome:"",
            e_price:"",
            e_description:"",
            e_link:"",
            e_price_sign:"",
            e_category:"",
            e_tags:"",
            e_colors: "",
            
            eyeshadow: foto,
            es_id:"",
            es_marca:"",
            es_tipo:"",
            es_nome:"",
            es_price:"",
            es_description:"",
            es_link:"",
            es_price_sign:"",
            es_category:"",
            es_tags:"",
            es_colors: ""


        }         
    }

    componentDidMount(){

        window.scrollTo(0, 0)

        const api1 = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`
        const api2 = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush`
        const api3 = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation`
        const api4 = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`
        const api5 = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow`

        const apic = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`

        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        
        const promise_api_m1 = (api1) => {
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', api1, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({makeup1: data})
                        
                        console.log(this.state.makeup1)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }

        const promise_api_m2 = (api2) => {
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', api2, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({makeup2: data})
                        
                        console.log(this.state.makeup2)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }

        const promise_api_m3 = (api3) => {
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', api3, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({makeup3: data})
                        
                        console.log(this.state.makeup3)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }

       const promise_api_m4 = (api4) => {
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', api4, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({makeup4: data})
                        
                        console.log(this.state.makeup4)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }

        const promise_api_m5 = (api5) => {
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', api5, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({makeup5: data})
                        
                        console.log(this.state.makeup5)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }

        const promise_api_c = (apic) => {

        
            return new Promise((fullfill, rejected) => {
        
                const request = new XMLHttpRequest();
                request.open('GET', apic, true)
                request.onload = () => {
                    if (request.readyState === 4) {
                    if (request.status === 200) {
    
                        let data = JSON.parse(request.responseText)
                        this.setState({cocktail: data})
                        
                        console.log(this.state.cocktail)
    
                        fullfill('Sucesso na ligação à API!')
                    } else {
                        rejected(Error('Erro no request.status'));
                    }
                }
                }
                request.send();
            })
        }
        
        function onFullfilled(message) {
            console.log(message);
        }
        
        function onRejected(error) {
            console.log(error);
        }
        
        promise_api_m1(api1).then(onFullfilled, onRejected);
        promise_api_m2(api2).then(onFullfilled, onRejected);
        promise_api_m3(api3).then(onFullfilled, onRejected);
        promise_api_m4(api4).then(onFullfilled, onRejected);
        promise_api_m5(api5).then(onFullfilled, onRejected);
        promise_api_c(apic).then(onFullfilled, onRejected);

       
    }

    Random = () => {

        
            window.scrollTo(0, 1180)
        

        var Lipstick = [...this.state.makeup1] 

        if (Lipstick.length !== 0 || undefined){
    
            var i = Math.floor(Math.random()*Lipstick.length)
            var random_lipstick = [Lipstick[i]]
    
            console.log(i)
            
            random_lipstick.map ((makeup) => {
                //return makeup.api_featured_image
                this.setState({
                    lipstick: makeup.api_featured_image,
                    l_id: makeup.id,
                    l_marca: makeup.brand,
                    l_tipo: makeup.product_type,
                    l_nome: makeup.name,
                    l_price: makeup.price,
                    l_description: makeup.description,
                    l_link: makeup.product_link,
                    l_price_sign: makeup.price_sign,
                    l_category: makeup.category,
                    l_tags: makeup.tag_list,
                    l_colors: makeup.product_colors
                })
            })
            
        }
    
        var Blush = [...this.state.makeup2] 
    
        if (Blush.length !== 0 || undefined){
    
            var i = Math.floor(Math.random()*Blush.length)
            var random_blush = [Blush[i]]
    
            console.log(i)
            
            random_blush.map ((makeup) => {
                //return makeup.api_featured_image
                this.setState({
                    blush: makeup.api_featured_image,
                    b_id: makeup.id,
                    b_marca: makeup.brand,
                    b_tipo: makeup.product_type,
                    b_nome: makeup.name,
                    b_price: makeup.price,
                    b_description: makeup.description,
                    b_link: makeup.product_link,
                    b_price_sign: makeup.price_sign,
                    b_category: makeup.category,
                    b_tags: makeup.tag_list,
                    b_colors: makeup.product_colors
                })
            })
            
        }
    
        var Foundation = [...this.state.makeup3] 
     
        if (Foundation.length !== 0 || undefined){
    
            var i = Math.floor(Math.random()*Foundation.length)
            var random_foundation = [Foundation[i]]
    
            console.log(i)
            
            random_foundation.map ((makeup) => {
                //return makeup.api_featured_image
                this.setState({
                    foundation: makeup.api_featured_image,
                    f_id: makeup.id,
                    f_marca: makeup.brand,
                    f_tipo: makeup.product_type,
                    f_nome: makeup.name,
                    f_price: makeup.price,
                    f_description: makeup.description,
                    f_link: makeup.product_link,
                    f_price_sign: makeup.price_sign,
                    f_category: makeup.category,
                    f_tags: makeup.tag_list,
                    f_colors: makeup.product_colors
                })
                
            })
            
        }
    
        var Eyeliner = [...this.state.makeup4] 
    
        if (Eyeliner.length !== 0 || undefined){
    
            var i = Math.floor(Math.random()*Eyeliner.length)
            var random_eyeliner = [Eyeliner[i]]
    
            console.log(i)
            
            random_eyeliner.map ((makeup) => {
                //return makeup.api_featured_image
                this.setState({
                    eyeliner: makeup.api_featured_image,
                    e_id: makeup.id,
                    e_marca: makeup.brand,
                    e_tipo: makeup.product_type,
                    e_nome: makeup.name,
                    e_price: makeup.price,
                    e_description: makeup.description,
                    e_link: makeup.product_link,
                    e_price_sign: makeup.price_sign,
                    e_category: makeup.category,
                    e_tags: makeup.tag_list,
                    e_colors: makeup.product_colors
                })
            })
            
        }
    
        var Eyeshadow = [...this.state.makeup5] 
    
        if (Eyeshadow.length !== 0 || undefined){
    
            var i = Math.floor(Math.random()*Eyeshadow.length)
            var random_eyeshadow = [Eyeshadow[i]]
    
            console.log(i)
            
            random_eyeshadow.map ((makeup) => {
                //return makeup.api_featured_image
                this.setState({
                    eyeshadow: makeup.api_featured_image,
                    es_id: makeup.id,
                    es_marca: makeup.brand,
                    es_tipo: makeup.product_type,
                    es_nome: makeup.name,
                    es_price: makeup.price,
                    es_description: makeup.description,
                    es_link: makeup.product_link,
                    es_price_sign: makeup.price_sign,
                    es_category: makeup.category,
                    es_tags: makeup.tag_list,
                    es_colors: makeup.product_colors

                })
            })
            
        }
    }


    Cocktails = () => {

        window.scrollTo(0, 3900);


        let cocktails_data = [this.state.cocktail]

        if (cocktails_data[0].length !== 0 || undefined){
    
            this.setState({cocktail0: cocktails_data[0].drinks[18]})
            this.setState({cocktail1: cocktails_data[0].drinks[9] })
            this.setState({cocktail2: cocktails_data[0].drinks[69] })
            this.setState({cocktail3: cocktails_data[0].drinks[85] })
            this.setState({cocktail4: cocktails_data[0].drinks[35] })
            this.setState({cocktail5: cocktails_data[0].drinks[10] })
            this.setState({cocktail6: cocktails_data[0].drinks[56] })
            this.setState({cocktail7: cocktails_data[0].drinks[82] })
            this.setState({cocktail8: cocktails_data[0].drinks[24] })
        
        }   
            
    }

    Select1 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda1: "5px solid orange",
            selected: true
    })
            
    }
    Select2 = () => {

        window.scrollTo(0, 1480);


        this.setState({
            borda2: "5px solid orange",
            selected: true
    })
            
    }
    Select3 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda3: "5px solid orange",
            selected: true
    })
            
    }
    Select4 = () => {

        window.scrollTo(0, 1480);
        
        this.setState({
            borda4: "5px solid orange",
            selected: true
    })
            
    }
    Select5 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda5: "5px solid orange",
            selected: true
    })
            
    }
    Select6 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda6: "5px solid orange",
            selected: true
    })
            
    }
    Select7 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda7: "5px solid orange",
            selected: true
    })
            
    }
    Select8 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda8: "5px solid orange",
            selected: true
    })
            
    }
    Select9 = () => {

        window.scrollTo(0, 1480);

        this.setState({
            borda9: "5px solid orange",
            selected: true
    })
            
    }

render(){

    console.log(this.state.selected)

    var tag_a = [...this.state.l_tags]
    var tag_b = [...this.state.b_tags]
    var tag_c = [...this.state.f_tags]
    var tag_d = [...this.state.e_tags]
    var tag_e = [...this.state.es_tags]
    var color_a = [...this.state.l_colors]
    var color_b = [...this.state.b_colors]
    var color_c = [...this.state.f_colors]
    var color_d = [...this.state.e_colors]
    var color_e = [...this.state.es_colors]

    return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center" >
        <img src={um} width='40px' height='75px'></img><p>Escolhe o teu cocktail preferido</p>
        <div style={{textAlign:'center', marginBottom:'5rem'}}><a className="btn btn-primary px-5 py-3" onClick={() => this.Cocktails() }>Escolher Cocktails</a></div>

        
        <p></p>
        <div style={{margin:'auto', textAlign:'center'}}><img src={menina} width='700px' height='650px'></img></div>
        {
        (this.state.makeup1.length || this.state.makeup2.length || this.state.makeup3.length ||
        this.state.makeup4.length || this.state.makeup5.length !== 0) ?
         (<div>
             {(this.state.selected === !false) ? (
            <div style={{marginTop:'2rem'}}><img src={dois} width='40px' height='65px'></img><div><br/><p>Agora gera a tua maquilhagem!</p>
             <a className="btn btn-primary px-5 py-3" onClick={() => this.Random() }>Gerar Maquilhagem</a></div></div>
             ) : (<div></div>)}
  
                
            
         <div style={{position:'absolute', top:'35rem', left:'50rem'}}>
             <Link to={{pathname: `/makeup/${this.state.l_id}`,
            state: {
                nome: `${this.state.l_nome}`,
                img: `${this.state.lipstick}`,
                tipo: `${this.state.l_tipo}`,
                description: `${this.state.l_description}`,
                link: `${this.state.l_link}`,
                marca: `${this.state.l_marca}`,
                price_s: `${this.state.l_price_sign}`,
                category: `${this.state.l_category}`,
                tags: `${tag_a.map((item) => {
                  return item;
                })}`,
                colors: `${color_a.map((item) => {
                  return item.hex_value;
                })}`,
              },
            
            }}>
                <img src={this.state.lipstick} className='dotrandom'/>  
            </Link>
        </div>
         <div style={{position:'absolute', top:'35rem', left:'13.5rem'}} >
         <Link to={{pathname: `/makeup/${this.state.b_id}`,
            state: {
                nome: `${this.state.b_nome}`,
                img: `${this.state.blush}`,
                tipo: `${this.state.b_tipo}`,
                description: `${this.state.b_description}`,
                link: `${this.state.b_link}`,
                marca: `${this.state.b_marca}`,
                price_s: `${this.state.b_price_sign}`,
                category: `${this.state.b_category}`,
                tags: `${tag_b.map((item) => {
                  return item;
                })}`,
                colors: `${color_b.map((item) => {
                  return item.hex_value;
                })}`,
              },
            
            }}>
             <img src={this.state.blush} className='dotrandom'/>
             </Link>
             </div>

         <div style={{position:'absolute', top:'27rem', left:'10rem'}}>
         <Link to={{pathname: `/makeup/${this.state.f_id}`,
            state: {
                nome: `${this.state.f_nome}`,
                img: `${this.state.foundation}`,
                tipo: `${this.state.f_tipo}`,
                description: `${this.state.f_description}`,
                link: `${this.state.f_link}`,
                marca: `${this.state.f_marca}`,
                price_s: `${this.state.f_price_sign}`,
                category: `${this.state.f_category}`,
                tags: `${tag_c.map((item) => {
                  return item;
                })}`,
                colors: `${color_c.map((item) => {
                  return item.hex_value;
                })}`,
              },
            
            }}>
             <img src={this.state.foundation} className='dotrandom'/>
             </Link>
             </div>
         <div style={{position:'absolute', top:'29rem', left:'55rem'}}>
         <Link to={{pathname: `/makeup/${this.state.e_id}`,
            state: {
                nome: `${this.state.e_nome}`,
                img: `${this.state.eyeliner}`,
                tipo: `${this.state.e_tipo}`,
                description: `${this.state.e_description}`,
                link: `${this.state.e_link}`,
                marca: `${this.state.e_marca}`,
                price_s: `${this.state.e_price_sign}`,
                category: `${this.state.e_category}`,
                tags: `${tag_d.map((item) => {
                  return item;
                })}`,
                colors: `${color_d.map((item) => {
                  return item.hex_value;
                })}`,
              },
            
            }}>
             <img src={this.state.eyeliner} className='dotrandom'/>
             </Link>
             </div>
         <div style={{position:'absolute', top:'23rem', left:'49.5rem'}}>
         <Link to={{pathname: `/makeup/${this.state.es_id}`,
            state: {
                nome: `${this.state.es_nome}`,
                img: `${this.state.eyeshadow}`,
                tipo: `${this.state.es_tipo}`,
                description: `${this.state.es_description}`,
                link: `${this.state.es_link}`,
                marca: `${this.state.es_marca}`,
                price_s: `${this.state.es_price_sign}`,
                category: `${this.state.es_category}`,
                tags: `${tag_e.map((item) => {
                  return item;
                })}`,
                colors: `${color_e.map((item) => {
                  return item.hex_value;
                })}`,
              },
            
            }}><img src={this.state.eyeshadow} className='dotrandom'/>
            </Link></div></div>) :(<div className='text-center'><div class="loader mt-4 mb-4" style={{margin:'auto'}}></div></div>
)

        }
        
        { (this.state.cocktail0.length || this.state.cocktail1.length || this.state.cocktail2.length ||
        this.state.cocktail3.length || this.state.cocktail4.length || this.state.cocktail5.length !== 0) ? 
        (<div>
            <br/>
            <h4 style={{textAlign:'center', marginTop:'5rem', color:'#cc5ba6'}}>Começa por escolher o teu Cocktail preferido</h4>
            <br></br>
    <div className="container" style={{marginBottom:'10rem'}}>
        <div className="row"> 
        <div className="col-md-4 text-center" onClick={() => this.Select1() } >
                <img src={this.state.cocktail0.strDrinkThumb} className='dot' style={{border: this.state.borda1}}></img>
                <h4>{this.state.cocktail0.strDrink}</h4>
                </div>
            <div className="col-md-4 text-center" onClick={() => this.Select2() } >
                <img src={this.state.cocktail1.strDrinkThumb} className='dot' style={{border: this.state.borda2}}></img>
                <h4>{this.state.cocktail1.strDrink}</h4>
                </div>
            <div className="col-md-4 text-center" onClick={() => this.Select3() } >
                <img src={this.state.cocktail2.strDrinkThumb} className='dot' style={{border: this.state.borda3}}></img>
                <h4>{this.state.cocktail2.strDrink}</h4>
                </div>
            <div className="col-md-4 text-center" onClick={() => this.Select4() } >
                <img src={this.state.cocktail3.strDrinkThumb} className='dot' style={{border: this.state.borda4}}></img>
                <h4>{this.state.cocktail3.strDrink}</h4>
                </div>
            <div className="col-md-4 text-center" onClick={() => this.Select5() } >
                <img src={this.state.cocktail4.strDrinkThumb} className='dot' style={{border: this.state.borda5}}></img>
                <h4>{this.state.cocktail4.strDrink}</h4>
                </div>
            <div className="col-md-4 text-center" onClick={() => this.Select6() } >
                <img src={this.state.cocktail5.strDrinkThumb} className='dot' style={{border: this.state.borda6}}></img>
                <h4>{this.state.cocktail5.strDrink}</h4>
            </div>
            <div className="col-md-4 text-center" onClick={() => this.Select7() } >
                <img src={this.state.cocktail6.strDrinkThumb} className='dot' style={{border: this.state.borda7}}></img>
                <h4>{this.state.cocktail6.strDrink}</h4>
            </div>
            <div className="col-md-4 text-center" onClick={() => this.Select8() } >
                <img src={this.state.cocktail7.strDrinkThumb} className='dot' style={{border: this.state.borda8}}></img>
                <h4>{this.state.cocktail7.strDrink}</h4>
            </div>
            <div className="col-md-4 text-center" onClick={() => this.Select9() } >
                <img src={this.state.cocktail8.strDrinkThumb} className='dot' style={{border: this.state.borda9}}></img>
                <h4>{this.state.cocktail8.strDrink}</h4>
            </div>

                </div>
                </div>

                
           
                </div>) : (<div></div>)}


                
        </div>
      </div>
      </div>
          
    )
}
    
}

export default Random