var React = require('react');

class View extends React.Component {

    render() {
        console.log(this.props);
        // доступ к параметрам маршртутизации в react осуществляется через this.props.params.paramName, где paramName - имя параметра. Например, ':id'
        return (
               <h1>View route param: {this.props.params.id}</h1>
         )
    }
}

module.exports = View; 