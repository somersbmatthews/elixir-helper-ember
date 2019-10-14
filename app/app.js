import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import CodeMirror from 'codemirror'
import registerElixirMode from 'codemirror-mode-elixir'

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'elixir' })
}

loadInitializers(App, config.modulePrefix);
