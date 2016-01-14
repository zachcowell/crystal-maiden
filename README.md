# vagrant-ansible-node
Vagrant/Ansible starter kit that contains node, gulp, bower

## Setting up the environment for the first time

* [Install Vagrant](http://vagrantup.com)

* [Install Virtualbox](http://virtualbox.org)

* [Install Ansible](http://ansible.com)

* run `vagrant up --provision` from `vagrant-ansible-node/vagrant` directory.
  * *This may take some long the first time its run.*

* Connect to the vagrant machine: `vagrant ssh`

* Hit: [http://localhost:3000/](http://localhost:3000) in your browser to see everything installed correctly.

## Coming back to the code after setting it up

* Start the vagrant instance again `vagrant up` from `vagrant-ansible-node/vagrant`

* Connect to the vagrant machine: `vagrant ssh`

## Notes:

* The code is shared between local and the vagrant instance, you can edit
  code normally on your host machine and the server will restart automatically
  when code changes are detected

## Gulp Tasks

      ├─┬ default
      │ └── watch
      ├─┬ browserSync
      │ └── build
      ├── build
      ├── clean
      ├── extras
      ├── images
      ├── scripts
      ├── scss
      ├── html
      ├─┬ watch
      │ └── browserSync
      └── usemin
