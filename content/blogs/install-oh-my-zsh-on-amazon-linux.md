---
title: "Install Oh-My-Zsh on Amazon Linux"
date: 2022-04-23T05:39:58-04:00
draft: false
author: "Fransafu"
tags:
- zsh
- ec2
- amazon
- linux
---

Hi There!

This is a short code snippet to install Oh-My-Zsh on Amazon Linux.

TLDR

```sh
sudo yum update -y
sudo yum install -y zsh util-linux-user
sudo chsh -s /usr/bin/zsh $USER
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
# Now, disconnect and reconnect to the EC2 instance
```

[Check the source in Github Gist](https://gist.github.com/fransafu/9128c94a3a15f70d9727a3cbb287ba7c)
