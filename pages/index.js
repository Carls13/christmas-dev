// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import Slider from './../components/slider/slider';
import Shop from './../components/shop/shop';
import Trivia from './../components/trivia/trivia';

class Index extends React.Component{

	constructor(){
		super();
		}

	render(){

		return(
			<Layout title='Christmas Dev'>	
				<Slider/>
				<Shop/>
				<Trivia/>
			</Layout>)
	}
}

export default Index;