import { html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class HAXCMSRandomWords extends SimpleColors {
  static get tag() {
    return 'haxcms-random-words';
  }

  static get properties() {
    return {
      ...super.properties,
      key: { type: String, reflect: true },
      phrases: { type: Array },
      word: { type: String },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    if (this.key === 'new') {
      this.phrases = [
        "What's ya name?",
        'Dogecoin to the moon',
        'Welcome to the Jungle',
      ];
    } else if (this.key === 'return') {
      this.phrases = [
        'Welcome back, take 2?',
        "That wasn't very long",
        'Sup man',
      ];
    } else {
      this.phrases = [
        "What's ya name?",
        'Dogecoin to the moon',
        'Welcome to the Jungle',
        'Welcome back, take 2?',
        "That wasn't very long",
        'Sup man',
      ];
    }

    this.word = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    console.log(this.word);
  }

  constructor() {
    super();
    this.key = 'new';
  }

  render() {
    return html` <p>${this.word}</p> `;
  }
}
