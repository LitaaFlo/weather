import React, { Component } from 'react';
import './savecitylist.css'
export default class SaveCityList extends Component {
  constructor (props) {
    super(props);
    this.state = {
        active: false,
        term: '',
        data: []
      }
  }
  toggleClass(e, elem) {
    if ((e.target.className === 'collection-item') || (e.target.className === 'collection-item active')) {
      if (document.getElementById('active_el')) {
        document.getElementById('active_el').setAttribute('class', 'collection-item');
        document.getElementById('active_el').removeAttribute('id')
      }
      if (e.target.className === 'collection-item') {
        e.target.setAttribute('class', 'collection-item active');
        e.target.setAttribute('id', 'active_el');
      } else {
        e.target.setAttribute('class', 'collection-item');
      }
      this.props.props.pageActions.addCity(elem)
    }
  }
  deleteCity(e, id){
    this.props.props.pageActions.removeCity(id);
  }
  componentDidMount(){
    console.log(this.props)
    this.props.props.pageActions.pickUp()
  }
  componentWillReceiveProps(){
    this.setState({data: this.props.props.city.cityes})
  }
  componentDidUpdate(){
    if ((this.props.props.city.cityes.length !== this.state.data.length) && this.state.term === '' ) {
      this.setState({data: this.props.props.city.cityes})
    }
  }
  dataSearch(e) {
    this.setState({term: e.target.value.toLowerCase() })
    if (this.state.term !== '') {
      const filter = this.state.data.filter(item => {
        return item.name.toLowerCase().includes(this.state.term)
    })
      this.setState({data: filter})
    } else {
      this.setState({data:this.props.props.city.cityes})
    }
  }
  render(){
    return(
      <div className="col s12">
          <div className="input-field col s12 m12">
            <input  id="searchSave" type="text" className="validate" onChange={this.dataSearch.bind(this)} />
            <label htmlFor="searchSave">Search</label>
              <div className="col_cityes">{`Всего городов ${this.state.data.length}`}</div>
          </div>
          { this.state.data.length > 0 &&
              <div className="collection col s12 m12">
                  {
                    this.state.data.map((elem, id) => {
                      return (
                          <div key={id} className='collection-item' onClick={(e) => this.toggleClass(e, elem.name)}>
                              {elem.name}
                              <span className="delete-item right" onClick={(e) => this.deleteCity(e, elem.name)}>X</span>
                          </div>
                      )
                    })
                  }
              </div>
          }
      </div>

    )
  }
}
