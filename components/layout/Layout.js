import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import * as contentful from 'contentful';

import { connect } from 'react-redux';

import Header from './../header/Header';
import Footer from '../footer/Footer';
import Spinner from '../spinner/Spinner';

import 'bootstrap/dist/css/bootstrap.css';    


Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


class Layout extends React.Component{

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

  getContentfulData = () =>{

    const { products } = this.props;

      if (products.length < 1){
        this.setState({
              loading: true
        })
        var client = contentful.createClient({
             space: 'ttdz9r1ymhnc',
             accessToken: '0xiIXfPDXD4kITdlaCOuAXCAiWmQtHEl75LxShrEOjQ'
        })
  
        client.getEntries().then(entries =>{
  
        // Filters products    
          const products = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'product';
          }).map((item)=>({
            ...item.fields,
            createdAt: item.sys.createdAt
            })
          )
  
       this.props.fillProducts(products);

       this.setState({
              loading: false
        });
        })}
  }

  componentDidMount() {
    this.getContentfulData();
  }

	render(){

		const { children, title } = this.props
    const { loading } = this.state

		return <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" type="image/x-icon" href="./static/favicon.png" />
				<title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet"></link>
        <script src='https://www.paypalobjects.com/api/checkout.js' />
			</Head>
  			   { loading ? <Spinner/> : 
            <React.Fragment>
              <Header/>
                {children}
              <Footer/>
            </React.Fragment> }
			<style jsx global>{`

        html, body{
          overflow-x: hidden;
        }

        body {
          margin: 0;
          font-family: 'Titillium Web';
          background-color: #ffffff;
          color: black;
        }

        a {
          color: white;
          font-weight: bold;
        }

        a:hover {
          color: white;
          text-decoration: none;
        }

        .center-image{
          display: block;
          margin: 0 auto;
        }

        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #AA0303;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #AA0303, 0 0 5px #AA0303;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #AA0303;
          border-left-color: #AA0303;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fillProducts: (products) => dispatch({
      type: 'FILL_PRODUCTS',
      products
    })
  }
}

const mapStateToProps = ({ products }) => {
  return { products } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);