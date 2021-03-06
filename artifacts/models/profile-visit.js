var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attr, modelName, primaryKey } from '../annotations/model';
import ProfileInteractionModel from './base/profile-interaction';
let ProfileVisitModel = class ProfileVisitModel extends ProfileInteractionModel {
};
__decorate([
    attr('int'),
    primaryKey(),
    __metadata("design:type", Number)
], ProfileVisitModel.prototype, "id", void 0);
__decorate([
    attr(),
    __metadata("design:type", Number)
], ProfileVisitModel.prototype, "sourceProfileId", void 0);
__decorate([
    attr(),
    __metadata("design:type", Number)
], ProfileVisitModel.prototype, "targetProfileId", void 0);
ProfileVisitModel = __decorate([
    modelName('ProfileVisit')
], ProfileVisitModel);
export default ProfileVisitModel;
//# sourceMappingURL=profile-visit.js.map