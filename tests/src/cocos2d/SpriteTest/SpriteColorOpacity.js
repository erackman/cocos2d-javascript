'use strict'

//{{{ Imports
var util      = require('util')
  , path      = require('path')
  , cocos     = require('cocos2d')
  , geo       = require('geometry')
  , nodes     = cocos.nodes
  , actions   = cocos.actions
  , ccp       = geo.ccp

var SpriteDemo    = require('./SpriteDemo')
  , Director      = cocos.Director
  , Scheduler     = cocos.Scheduler
  , Rect          = geo.Rect
  , Sprite        = nodes.Sprite
  , Sequence      = actions.Sequence
  , RepeatForever = actions.RepeatForever
  , FadeIn        = actions.FadeIn
//}}} Imports

//{{{ Constants
var kTagSprite1 = 1
  , kTagSprite2 = 2
  , kTagSprite3 = 3
  , kTagSprite4 = 4
  , kTagSprite5 = 5
  , kTagSprite6 = 6
  , kTagSprite7 = 7
  , kTagSprite8 = 8
//}}} Constants

function SpriteColorOpacity () {
    SpriteColorOpacity.superclass.constructor.call(this)

    var atlasFilename = path.join(__dirname, '../resources/grossini_dance_atlas.png')

    var sprite1 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 0, 121 * 1, 85, 121) })
      , sprite2 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 1, 121 * 1, 85, 121) })
      , sprite3 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 2, 121 * 1, 85, 121) })
      , sprite4 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 3, 121 * 1, 85, 121) })
      , sprite5 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 0, 121 * 1, 85, 121) })
      , sprite6 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 1, 121 * 1, 85, 121) })
      , sprite7 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 2, 121 * 1, 85, 121) })
      , sprite8 = new Sprite({ file: atlasFilename, rect: new Rect(85 * 3, 121 * 1, 85, 121) })

    var s = Director.sharedDirector.winSize

    sprite1.position = ccp((s.width / 5) * 1, (s.height / 3) * 1)
    sprite2.position = ccp((s.width / 5) * 2, (s.height / 3) * 1)
    sprite3.position = ccp((s.width / 5) * 3, (s.height / 3) * 1)
    sprite4.position = ccp((s.width / 5) * 4, (s.height / 3) * 1)

    sprite5.position = ccp((s.width / 5) * 1, (s.height / 3) * 2)
    sprite6.position = ccp((s.width / 5) * 2, (s.height / 3) * 2)
    sprite7.position = ccp((s.width / 5) * 3, (s.height / 3) * 2)
    sprite8.position = ccp((s.width / 5) * 4, (s.height / 3) * 2)

    var action = new FadeIn({ duration: 3 })
      , actionBack = action.reverse()
      , fade = new RepeatForever(new Sequence({actions: [action, actionBack]}))

    /*
    id tintred = [CCTintBy actionWithDuration:2 red:0 green:-255 blue:-255]
    id tintred_back = [tintred reverse]
    id red = [CCRepeatForever actionWithAction: [CCSequence actions: tintred, tintred_back, nil]]

    id tintgreen = [CCTintBy actionWithDuration:2 red:-255 green:0 blue:-255]
    id tintgreen_back = [tintgreen reverse]
    id green = [CCRepeatForever actionWithAction: [CCSequence actions: tintgreen, tintgreen_back, nil]]

    id tintblue = [CCTintBy actionWithDuration:2 red:-255 green:-255 blue:0]
    id tintblue_back = [tintblue reverse]
    id blue = [CCRepeatForever actionWithAction: [CCSequence actions: tintblue, tintblue_back, nil]]
    */


    /*
    [sprite5 runAction:red]
    [sprite6 runAction:green]
    [sprite7 runAction:blue]
    */
    sprite8.runAction(fade)

    // late add: test dirtyColor and dirtyPosition
    this.addChild({ child: sprite1, z: 0, tag: kTagSprite1 })
    this.addChild({ child: sprite2, z: 0, tag: kTagSprite2 })
    this.addChild({ child: sprite3, z: 0, tag: kTagSprite3 })
    this.addChild({ child: sprite4, z: 0, tag: kTagSprite4 })
    this.addChild({ child: sprite5, z: 0, tag: kTagSprite5 })
    this.addChild({ child: sprite6, z: 0, tag: kTagSprite6 })
    this.addChild({ child: sprite7, z: 0, tag: kTagSprite7 })
    this.addChild({ child: sprite8, z: 0, tag: kTagSprite8 })


    Scheduler.get('sharedScheduler').schedule({target: this, method: this.removeAndAddSprite, interval: 2})
}

SpriteColorOpacity.inherit(SpriteDemo, /** @lends SpriteColorOpacity# */ {
    title: 'Sprite: Opacity'

  , removeAndAddSprite: function () {
        var sprite = this.getChild({ tag: kTagSprite5 })

        this.removeChild({ child: sprite, cleanup: false })
        this.addChild({ child: sprite, z: 0, tag: kTagSprite5 })
    }
})

module.exports = SpriteColorOpacity

// vim:et:st=4:fdm=marker:fdl=0:fdc=1
