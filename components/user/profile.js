/*!
 * Fresns 微信小程序 (https://fresns.cn)
 * Copyright 2021-Present 唐杰
 * Licensed under the Apache-2.0 license
 */
import { fresnsConfig, fresnsLang } from '../../api/tool/function';

Component({
  /** 组件的属性列表 **/
  properties: {
    user: Object,
  },

  /** 组件的初始数据 **/
  data: {
    userFollowerName: '',
    userFollowingName: '',
  },

  /** 组件生命周期声明对象 **/
  lifetimes: {
    attached: async function () {
      const userFollowerName = await fresnsConfig('user_follower_name');
      const userFollowingName = await fresnsLang('userFollowing');

      this.setData({
        userFollowerName: userFollowerName,
        userFollowingName: userFollowingName,
      });
    },
  },
});
