import { Webcam, Player, Effect, Dom } from '../utils/banuba/banubaSDK.js';

async function run() {
    const player = await Player.create({
        clientToken: process.env.REACT_APP_BANUBA_CLIENT_TOKEN || '',
        locateFile: {
            'BanubaSDK.wasm': '/webar/BanubaSDK.wasm',
            'BanubaSDK.data': '/webar/BanubaSDK.data',
            'BanubaSDK.simd.wasm': '/webar/BanubaSDK.simd.wasm',
        },
    }).then((player) => {
        player.applyEffect(new Effect('../../public/Afro.zip'));
        player.play();
        Dom.render(player, '#webar');
    });
}

run();
