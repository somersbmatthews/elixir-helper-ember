import Component from '@glimmer/component';
import { action } from '@ember/object';


// import CodeMirror from 'codemirror';
// import registerElixirMode from 'codemirror-mode-elixir';

// export default class ShowFileCodeComponent extends Component {
//    @action setupCodeMirror() {
//       CodeMirror
//          .fromTextArea(
//             document.getElementById('code'),
//             {mode: 'elixir'}
//          )
//    }
// }


export default class ShowFileCodeComponent extends Component {
   
   @action valueUpdated() {
      return "wtf"
   }
   
}