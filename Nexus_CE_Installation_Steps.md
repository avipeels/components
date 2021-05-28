**Create VM with default options on Ubuntu 18.04**

**Update packages**

     sudo apt-get update

**Install java jdk and jre**

    sudo apt install openjdk-8-jdk openjdk-8-jre
    

**Move into opt**

    cd /opt

**Install Nexus**

    sudo wget http://download.sonatype.com/nexus/3/nexus-3.22.0-02-unix.tar.gz

**Extract Nexus**

    sudo tar -xvf nexus-3.22.0-02-unix.tar.gz

    sudo mv nexus-3.22.0-02 nexus

**Create user nexus**

    sudo adduser nexus

**Give permission to nexus user**

    sudo chown -R nexus:nexus /opt/nexus
    sudo chown -R nexus:nexus /opt/sonatype-work

**Modify nexus.rc file**

    sudo nano /opt/nexus/bin/nexus.rc

**Modify memory settings**

    sudo nano /opt/nexus/bin/nexus.vmoptions

**Configure nexus to run as service**

    sudo nano /opt/nexus/bin/nexus.service

    [unit]
    Description=nexus service
    After=network.target
    [service]
    Type=forking
    LimitNOFILE=65536
    User=nexus
    Group=nexus
    ExecStart=/opt/nexus/bin/nexus start
    ExecStop=/opt/nexus/bin/nexus stop
    User=nexus
    Restart=on-abort
    [Install]
    WantedBy=multi-user.target
    

**Start nexus service**

    sudo systemctl enable nexus
    sudo systemctl start nexus
    sudo systemctl status nexus

