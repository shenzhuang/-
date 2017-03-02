* 区别git与svn
	* 开发者的本地?
		* svn : 只有一个版本的代码
		* git : 整个仓库的所有版本
	* 在没有网络的情况下, 开发还能不能进行版本控制?
		* svn : 不可以, svn没有自我版本控制的能力
		* git : 可以的, git在本地就有一个仓库, 本地的版本控制
	* 常用命令:
		* svn: checkout/commit/update
		* git : clone/add/commit/push/pull

* git的常用命令
	* 生成一个本地仓库
		* 新建 : git init
		* 克隆 : git clone url
	* 添加文件并提交
		* git add *
		* git commit -m "说明信息"
	* git在本地维护了3个区域
		* 工作区(working dir)
		* 缓存/暂存区(Index/Stage)     git add
		* 版本区(HEAD)   git commit
		* 查看状态: git status
	* 推送
		* 将本地仓库中的更新提交到远程仓库: 
			* 如果是新建的, 先要与远程仓库关联起来: git remote add origin 远程仓库的地址
			* 注意: 远程仓库必须是一个空仓库才能提交成功
			* 推送: git push origin master 
	* 拉取
		* git pull
			* git pull origin master
			* 自动合并
		* git fetch
			* git fetch origin master:tmp
			* git diff tmp   
			* git merge tmp : 将tmp分支合并到当前分支
			* 需要手动合并
	* 恢复
		git checkout commit_id <file.name> : 将指定文件回到指定版本
		git reset --hard HEAD  : 将整个工作区回到最新版本
		git reset --hard HEAD^ : 回到上一个版本
	* 其它的命令:
		* git log/reflog
		* git status
		* git diff 
	* 忽略:
		* 在项目的根目录下创建一个.gitignore
		* 在.gitignore添加所有需要忽略的文件/文件夹
			* /xxx : 根目录下的xxx
			* yyy : 所有的yyy
		* 提交(自动忽略指定的文件/文件夹)
	* git分支
		* git checkout -b feature_x
		* git checkout master
		* git push origin <branch> : 推送指定分支到远程仓库的指定分支
		* git merge <branch>
	* 公司多人协同
		* New organization并加入
		* 设置成员是可写的权限
		* clone/push/pull
	* 开源项目多人协同:
		* fork: 创建一个分支版本到我的账户下
		* clone/commit/push
		* pull request : 向原始项目提交一个pull的请求
		* 查看/diff/merge
		* 可以进行发信息交流
	* 使用TortoiseGit
		* 忽略
		* 使用GIT SSH
			* public Key需要配置到github上
			* private key 保存为一个ppk文件
	* webstorm中集成git