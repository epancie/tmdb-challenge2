import {
  Launch
} from 'wpe-lightning-sdk'
import App from './App.js'

export default function() {
  console.log("index");
  return Launch(App, ...arguments)
}
