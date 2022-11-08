class ResponseData {
  private status!: boolean;
  private message!: any;
  private payload: any;

  public getStatus() {
    return this.status;
  }

  public getMessage() {
    return this.message;
  }

  public getPayload() {
    return this.payload;
  }

  public setStatus(status: boolean) {
    return (this.status = status);
  }

  public setMessage(message: string) {
    return (this.message = message);
  }

  public setPayload(payload: any) {
    return (this.payload = payload);
  }

  public responseData() {
    return {
      status: this.status,
      message: this.message,
      payload: this.payload,
    };
  }
}

export default ResponseData;
