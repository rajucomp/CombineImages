class ImageRequest {
    static encoding = 'binary';
    static baseUrl = 'https://cataas.com/cat/says/';
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
          url: baseUrl + greeting + '?width=' + width + '&height=' + height + '&color' + color + '&s=' + size,
          encoding: encoding
          };
    }
  }

  module.exports.ImageRequest = ImageRequest;