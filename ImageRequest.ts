class ImageRequest {
    static encoding = 'binary';
    static baseUrl = 'https://cataas.com/cat/says/';
    greeting: string;
    who: string;
    width: number;
    height: number;
    color: string;
    size: number;
    constructor(greeting = null, who, width, height, color, size) {
      this.greeting = greeting;
      this.who = who;
      this.width = width;
      this.height = height;
      this.color = color;
      this.size = size;
    }

    BuildRequest()
    {
        return {
          // https://cataas.com/cat/says/Hi%20There?width=500&amp;height=800&amp;c=Cyan&amp;s=150
          url: ImageRequest.baseUrl + this.greeting + '?width=' + this.width + '&height=' + this.height + '&color' + this.color + '&s=' + this.size,
          encoding: ImageRequest.encoding
          };
    }
  }

  module.exports.ImageRequest = ImageRequest;