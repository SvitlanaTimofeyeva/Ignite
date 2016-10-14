var React = require('react');
var ReactDOM = require('react-dom');

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var hashHistory = router.hashHistory;

// импорт компонентов, переключаемых при маршрутизации(views)
var View = require('./views/view.jsx');

// В данном примере рассмотрены параметры маршрутизации (route params) 

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            path: '/'
        }

        this.changeHandler = this.changeHandler.bind(this); 
    }
    changeHandler(e) {
        
        var newPath = '/items/' + e.target.value; 
        this.setState({ path: newPath });
    }
    render() {
        return (
            <div>
                <div className="panel well">
                    <h2>Enter Route Param Value: </h2>
                    <input className="input-lg" onChange={this.changeHandler}/>
                    <Link to={this.state.path} className="btn btn-lg btn-success">Apply</Link>
              
                </div>
                <div className="panel">
                  {/* Рендеринг маршрутизации */}
                  {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Router history={hashHistory}>
        <Route path="/" component={App}> 
            {/* Параметр маршрутизации :id */}
            <Route path="items/:id" component={View} />
        </Route>
    </Router>, document.getElementById('app')); 