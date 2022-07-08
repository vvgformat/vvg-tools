import { config, expect, should } from 'chai'
import { parseToDocumentTree } from '../lib/vvg-tools';
import { readLocalFile } from './lib/test-helper';
 

  
var fs = require('fs');





describe('Plugin', () => {
 
  before(async () => {
 

  })

 
  
  it('can test', async () => {
 
    expect(true).to.eql(true)


  })


  it('can parse doc tree', async () => {

    let localFile = readLocalFile('test/data/sample.svg') 

    let docTree = parseToDocumentTree( localFile , 'svg')

    console.log('docTree',JSON.stringify(docTree))
 
    expect(docTree.type).to.eql("root")

  })

 
  it('can import from svg', async () => {

    let localFile = readLocalFile('test/data/sample.svg') 

    let docTree = parseToDocumentTree( localFile , 'svg')

    console.log('docTree',JSON.stringify(docTree))
 
    expect(docTree.type).to.eql("root")

  })


  it('can export to svg', async () => {
 
    expect(true).to.eql(true)

  })

 

})
