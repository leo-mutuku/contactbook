PGDMP                       	    {            contactbook    15.4    15.4 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    32785    contactbook    DATABASE     �   CREATE DATABASE contactbook WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE contactbook;
                postgres    false            �            1259    32800    contacts    TABLE     �   CREATE TABLE public.contacts (
    id character varying(255) NOT NULL,
    useremail character varying(255),
    contactname character varying(30) NOT NULL,
    contact character varying NOT NULL,
    date character varying(300)
);
    DROP TABLE public.contacts;
       public         heap    postgres    false            �            1259    32807    users    TABLE     u   CREATE TABLE public.users (
    email character varying(255) NOT NULL,
    hashed_password character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    32800    contacts 
   TABLE DATA           M   COPY public.contacts (id, useremail, contactname, contact, date) FROM stdin;
    public          postgres    false    214   �	       �          0    32807    users 
   TABLE DATA           7   COPY public.users (email, hashed_password) FROM stdin;
    public          postgres    false    215   �
       i           2606    32806    contacts contacts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.contacts DROP CONSTRAINT contacts_pkey;
       public            postgres    false    214            k           2606    32813    users users_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �   �   x�}�1�  �N�|��N.&�:5.�C�I[L=��&����v6 ��&!&='=��0��U�>=�����&���u�r[ޥ	�7��Q44�v7���5ʇ8��.c�&���&��}*���T��R�ҝ[K{�ڱ�32�#��]I)?�{9�      �   �   x�e�K�0 ��=�R@R��*X��6��������lTS�7�]����r�ev��ؖıy\M�~���O�3~�gZ3Z�	��xvׇJJ�2�?+[*@�`�f
~8�i��kU
Y�����l����K���F}�1�     