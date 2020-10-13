import React from "react";
import {Images} from "../../../common/Images";

export const productsData = {
    caster: [
        {
            sort: 'caster',
            title: `지금까지 볼 수 없었던,\n라이브 스트리밍 프로그램`,
            description: `Caster의 특별한 기능들을 사용하여 지금까지 경험해보지 못한\n특별한 라이브 스트리밍을 만들어보세요`,
            more: `메뉴얼 상세보기`,
            downloadIcon: Images.apple_icn,
            download: `PUFFCASTER 다운로드`,
            caution: `Window 64비트 또는 그 이상 (Ver. 10.13.5)`,
            thumbnail: Images.visual_caster,
            comment: `지금 바로 당신의 라이브를 시작해보세요!`,
        }
    ],
    chat: [
        {
            sort: 'chat',
            title: `새로운 커뮤니케이션을\n경험하세요`,
            description: `퍼프 플레이를 사용하여 시청자가 참여할 수 있는\n재미있는 라이브 스트리밍을 해보세요`,
            more: `가이드 영상 보기`,
            downloadIcon: Images.download_icn,
            download: `퍼프 플레이 사용해보기`,
            caution: ``,
            thumbnail: Images.visual_chat,
            comment: `지금 바로 당신의 라이브를 시작해보세요!`,
        }
    ],
    cam: [
        {
            sort: 'cam',
            title: `어디서든 가능한\n모바일 라이브 스트리밍`,
            description: `별도의 장비 없이 스마트폰 만으로 높은 품질의 라이브 스트리밍이 가능하며,\nCASTER와 연동하여 더욱 풍성한 라이브 스트리밍을 진행할 수 있습니다.`,
            more: `메뉴얼 상세보기`,
            downloadIcon: Images.apple_icn,
            download: `App Store 다운로드`,
            caution: `iPhone X 이상 (iOS 13.5 이상)`,
            thumbnail: Images.visual_caster,
            comment: `지금 바로 당신의 라이브를 시작해보세요!`,
        }
    ]
}
