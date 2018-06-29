var permission = {
	user_add: "user:add",//添加用户
	user_edit: "user:edit",//编辑用户
	user_del: "user:del",//删除
	user_disable: "user:disable",//禁用
	user_enable: "user:enable",//启用
	user_resetPwd:"user:resetPwd",//重置密码
	add_role: "user:addRole",//分配角色
	
	role_add: "role:add",
	role_edit: "role:edit",
	role_del: "role:del",
	add_permission: "role:addPermission",
	
	permission_add: "permission:add",
	permission_edit: "permission:edit",
	permission_del: "permission:del", 
	
	//重建索引
	index_store:"index:store",
	index_product:"index:product",
	index_ad:"index:ad",
	
	//删除无效索引
	indexDel_store:"indexDel:store",
	indexDel_product:"indexDel:product",
	indexDel_ad:"indexDel:ad",
	
	//删除全部索引
	indexDelAll_store:"indexDelAll:store",
	indexDelAll_product:"indexDelAll:product",
	indexDelAll_ad:"indexDelAll:ad",
	
	message_del:"message:del",
	message_pushOne:"message:pushOne",
	message_pushAll:"message:pushAll",
	
	depositcash_edit:"depositcash:edit",
	withdraw_edit:"withdraw:edit",
	withdraw_detail:"withdraw:detail",
	withdraw_export:"withdraw:export",
	withdraw_import:"withdraw:import",
	
	adPlatForm_add:"adPlatForm:add",
	adPlatForm_del:"adPlatForm:del",
	adPlatForm_edit:"adPlatForm:edit",
	adPlatForm_soldOut:"adPlatForm:soldOut",
	index_store_putAway:"adPlatForm:putAway",
	
	productComment_del:"productComment:del",
	storeComment_del:"storeComment:del",
	suggest_del:"suggest:del",
	
	productAudit_detail:"productAudit:detail",
	productAudit_del:"productAudit:del",
	productAudit_soldOut:"productAudit:soldOut",
	
	adAudit_pass:"adAudit:pass",
	adAudit_unpass:"adAudit:unpass",
	adAudit_detail:"adAudit:detail",
	adAudit_del:"adAudit:del",
	adAudit_soldOut:"adAudit:soldOut",
	
	storeAudit_detail:"storeAudit:detail",
	storeAudit_audit:"storeAudit:audit",
	
	order_edit:"order:edit",
	order_cancel:"order:cancel",
	
	refund_cancel:"refund:cancel",
	refund_refundToUser:"refund:refundToUser",
	refund_detail:"refund:detail",
	
	property_freeze:"property:freeze",//冻结
	property_unfreeze:"property:unfreeze",//解冻
	balance_recharge:"balance:recharge",//充值余额
	point_recharge:"point:recharge",//充值积分
	
	//会员管理
	account_detail:"account:detail",//用户/商家详情
	account_freezeOper:"account:freezeOper",//冻结、解冻
	grade_list:"grade:list",//等级列表
	grade_edit:"grade:edit",//等级编辑

	//举报管理
	inform_detail:"inform:detail",//详情
	inform_edit:"inform:edit",//下架/冻结/不予处理
	
	//工单列表
	workOrder_edit:"workOrder:edit",//处理、不予处理
	
	agent_list:"agent:list",//代理商列表
	agent_add:"agent:add",//代理商新增
	agent_edit:"agent:edit",//代理商新增
	
	//抽奖活动
	lottery_add:"lottery:add",
	lottery_publish:"lottery:publish",
	lottery_cancel:"lottery:cancel",
	lottery_del:"lottery:del",
	lottery_record:"lottery:record",
	lottery_export:"lottery:export",
	lottery_import:"lottery:import",
	
	draw_lottery_add:"draw_lottery:add",
	draw_lottery_publish:"draw_lottery:publish",
	draw_lottery_cancel:"draw_lottery:cancel",
	draw_lottery_del:"draw_lottery:del",
	draw_lottery_record:"draw_record:list",
	draw_lottery_prize:"draw_prize:list",
	draw_prize_add:"draw_prize:add",
	draw_prize_del:"draw_prize:del",
	draw_prize_send:"draw_prize:send",
	
	point_lottery_add:"point_lottery:add",
	point_lottery_publish:"point_lottery:publish",
	point_lottery_draw:"point_lottery:draw",
	point_lottery_del:"point_lottery:del",
	point_lottery_activity_generate_basic_number:"pointLotteryActivity:generateBasicNumber",
	point_lottery_activity_save_winning_number:"pointLotteryActivity:saveWinningNumber",
	
	seckill_activity_page:"seckillActivity:page",//抢购活动列表
	seckill_activity_detail:"seckillActivity:detail",//抢购活动详情
	seckill_activity_delete:"seckillActivity:delete",//删除抢购活动
	seckill_activity_down:"seckillActivity:down",//下架抢购活动
	seckill_activity_release:"seckillActivity:release",//发布抢购活动
	seckill_activity_update:"seckillActivity:update",//更新抢购活动
	seckill_activity_add:"seckillActivity:add",//新增抢购活动
	seckill_activity_audit:"seckillActivity:audit",//审核抢购活动
	seckill_activity_product_page_search:"seckillActivityProduct:pageSearch",//抢购活动商品列表
	seckill_activity_product_not_passed:"seckillActivityProduct:notPassed",//抢购活动商品不通过
	seckill_activity_product_audit:"seckillActivityProduct:audit",//抢购活动商品审核
	
	patch_version_list:"patch_version:list",//APP补丁版本列表
	patch_version_enable:"patch_version:enable",//APP补丁版本启用
	patch_version_add:"patch_version:add",//APP补丁版本新增
	
	help_redpacket_activity_list:"helpRedpacketActivity:list",//红包活动列表
	help_redpacket_activity_detail:"helpRedpacketActivity:detail",//助力红包活动详情
	help_redpacket_activity_save:"helpRedpacketActivity:save",//更新助力红包活动
	help_redpacket_activity_update:"helpRedpacketActivity:update",//更新助力红包活动
	help_redpacket_activity_generate_large_redpacket:"helpRedpacketActivity:generateLargeRedpacket",//生成大额红包
	
	help_redpacket_activity_detail:"helpRedpacketActivity:detail",//助力红包活动详情
	help_redpacket_activity_update:"helpRedpacketActivity:update",//更新助力红包活动
	help_redpacket_activity_generate_large_redpacket:"helpRedpacketActivity:generateLargeRedpacket",//生成大额红包
	
	abnormal_get_abnormal_record:"abnormal:list",//异常账户列表
	abnormal_freeze:"abnormal:freeze",//异常账户冻结操作
	
	window_message_add:"window_message:add",
	window_message_update:"window_message:update",
	
	game_puzzle_add:"game_puzzle:add",
	game_puzzle_enable:"game_puzzle:enable",
	game_puzzle_disable:"game_puzzle:disable",
	game_puzzle_user_audit:"game_puzzle_user:audit",
	
	
	//去乐购分类
	category_add:"product-recommend:add",
	category_edit:"product-recommend:edit",
	category_hot:"product-recommend:hot",
	
	game_lottery_record:"gameDialRecord:list",
	game_lottery_record_list:"gameDialPrize:list",
	game_dail_update:"gameDial:update",
	game_prize_send:"gameDialRecord:send",
	game_prize_add:"gameDialPrize:save",
	game_prize_del:"gameDialPrize:del",
	game_prize_update:"gameDialPrize:update",
	game_puzzle_config_update:"gamePuzzleConfig:save",
	game_mind_config_update:"gameMindConfig:save",
	game_mind_question_bath:"gameMindQuestion:import",
	game_mind_question_cache:"gameMindQuestion:rebuild",
	
	//瑞奇岛
	rich_power_task_config:"powerTask:save",
	diamond_config_save:"diamondConfig:save"
};
