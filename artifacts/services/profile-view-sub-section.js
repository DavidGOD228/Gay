var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import DefaultBaseService from './base/impl/default';
import { LogoutClearable } from './mixins/logout-clearable';
import { mixin } from '../annotations/common';
import { listener } from '../annotations/event';
import { injectable } from 'inversify';
import ProfileViewSubSectionModel from '../models/profile-view/profile-view-sub-section';
let ProfileViewSubSectionService = class ProfileViewSubSectionService extends DefaultBaseService {
};
ProfileViewSubSectionService = __decorate([
    injectable(),
    listener('ProfileViewSubSection'),
    mixin([LogoutClearable])
], ProfileViewSubSectionService);
export { ProfileViewSubSectionService };
const profileViewSubSectionService = new ProfileViewSubSectionService(ProfileViewSubSectionModel);
export default profileViewSubSectionService;
//# sourceMappingURL=profile-view-sub-section.js.map