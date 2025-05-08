"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const typeorm_1 = require("typeorm");
const subscription_entity_1 = require("../../subscriptions/entities/subscription.entity");
let Plan = class Plan {
    id;
    name;
    description;
    priceCents;
    interval;
    isActive;
    createdAt;
    subscriptions;
};
exports.Plan = Plan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Plan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Plan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Plan.prototype, "priceCents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Plan.prototype, "interval", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Plan.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Plan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_entity_1.Subscription, (sub) => sub.plan),
    __metadata("design:type", Array)
], Plan.prototype, "subscriptions", void 0);
exports.Plan = Plan = __decorate([
    (0, typeorm_1.Entity)('plans')
], Plan);
//# sourceMappingURL=plan.entity.js.map