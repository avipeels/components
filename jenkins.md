sudo su jenkins
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ ssh-keygen -t rsa -b 4096 -C "rrrr@gm
ail.com"
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ eval "$(ssh-agent -s)"
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ ssh-add ~/.ssh/id_rsa
Identity added: /var/lib/jenkins/.ssh/id_rsa (/var/lib/jenkins/.ssh/id_rsa)
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ cat ~/.ssh/id_rsa.pub
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ ssh -T git@github.com
jenkins@myjenkins:/home/avinash_peelukhana/.ssh$ sudo /etc/init.d/jenkins restart

/usr/bin/git