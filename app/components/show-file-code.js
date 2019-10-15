import Component from '@glimmer/component';
import CodeMirror from 'lib/codemirror.js'
import registerElixirMode from 'dist/codemirror-mode-elixir.js'

export default class ShowFileCodeComponent extends Component {
   @action setupCodeMirror() {
      CodeMirror
         .fromTextArea(
            document.getElementById('code'),
            {mode: 'elixir'}
         )
   }
}
