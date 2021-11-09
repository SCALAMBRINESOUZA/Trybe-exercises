import React, { Component } from 'react';
import ISSContext from './ContextApi';
import getCurrentIssLocation from './services/issApi'

class IssProvider extends Component {
  constructor() {
    super()
    this.state = {
      atitude: -14.6279,
      longitude: -57.507,
      erro: null,
      isLoading: false
    }
    this.IssLocation = this.IssLocation.bind(this);
    this.handleIssLocationSuccess = this.handleIssLocationSuccess.bind(this);
    this.handleIssLocationError = this.handleIssLocationError.bind(this);
  }

  handleIssLocationSuccess(response) {
    const {iss_position: { latitude, longitude } } = response;
    this.setState({
      isLoading: false,
      latitude,
      longitude,
    }); 
  }

  handleIssLocationError(response) {
    this.setState({
      isLoading: false,
      erro: response.message,
    }); 
  }


  async fetchIssLocation() {
    this.setState({isLoading: true})
    try {
      const response = await getCurrentIssLocation();
      this.handleIssLocationSuccess(response);
    } catch (error) {
      this.handleIssLocationError(error);  
    }
  }

  render() {
      const { children } =this.props

    return (
      <ISSContext.Provider value={ { ...this.state, fetchIssLocation: this.fetchIssLocation } }>
          { children }
      </ISSContext.Provider>

    );
  }
}

export default IssProvider;
