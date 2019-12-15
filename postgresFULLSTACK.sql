PGDMP                         w            FullStackDB    12.0    12.0 5    L           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            M           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            N           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            O           1262    16393    FullStackDB    DATABASE     �   CREATE DATABASE "FullStackDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE "FullStackDB";
                postgres    false            �            1259    16593    command    TABLE     s   CREATE TABLE public.command (
    id integer NOT NULL,
    "table" bigint NOT NULL,
    user_id bigint NOT NULL
);
    DROP TABLE public.command;
       public         heap    postgres    false            �            1259    16591    command_id_seq    SEQUENCE     �   CREATE SEQUENCE public.command_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.command_id_seq;
       public          postgres    false    212            P           0    0    command_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.command_id_seq OWNED BY public.command.id;
          public          postgres    false    211            �            1259    16555    custom_products    TABLE     �   CREATE TABLE public.custom_products (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(500),
    price double precision NOT NULL,
    imgurl character varying(500),
    command_id bigint NOT NULL
);
 #   DROP TABLE public.custom_products;
       public         heap    postgres    false            �            1259    16553    custom_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.custom_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.custom_products_id_seq;
       public          postgres    false    210            Q           0    0    custom_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.custom_products_id_seq OWNED BY public.custom_products.id;
          public          postgres    false    209            �            1259    16609    ingredient_custom    TABLE     v   CREATE TABLE public.ingredient_custom (
    ingredient_id integer NOT NULL,
    custom_product_id integer NOT NULL
);
 %   DROP TABLE public.ingredient_custom;
       public         heap    postgres    false            �            1259    16448    ingredients    TABLE     �   CREATE TABLE public.ingredients (
    price double precision NOT NULL,
    name character varying(50) NOT NULL,
    id integer NOT NULL,
    description character varying(500),
    imgurl character varying(500)
);
    DROP TABLE public.ingredients;
       public         heap    postgres    false            �            1259    16446    ingredients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ingredients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.ingredients_id_seq;
       public          postgres    false    205            R           0    0    ingredients_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.ingredients_id_seq OWNED BY public.ingredients.id;
          public          postgres    false    204            �            1259    16437    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    price double precision NOT NULL,
    imgurl character varying
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16435    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    203            S           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    202            �            1259    16490    rel_ids    TABLE     e   CREATE TABLE public.rel_ids (
    product_id integer NOT NULL,
    ingredient_id integer NOT NULL
);
    DROP TABLE public.rel_ids;
       public         heap    postgres    false            �            1259    16538    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    user_name character varying(50) NOT NULL,
    user_password character varying(500) NOT NULL,
    category bigint NOT NULL,
    user_email character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16536    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    208            T           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    207            �
           2604    16596 
   command id    DEFAULT     h   ALTER TABLE ONLY public.command ALTER COLUMN id SET DEFAULT nextval('public.command_id_seq'::regclass);
 9   ALTER TABLE public.command ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            �
           2604    16558    custom_products id    DEFAULT     x   ALTER TABLE ONLY public.custom_products ALTER COLUMN id SET DEFAULT nextval('public.custom_products_id_seq'::regclass);
 A   ALTER TABLE public.custom_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �
           2604    16451    ingredients id    DEFAULT     p   ALTER TABLE ONLY public.ingredients ALTER COLUMN id SET DEFAULT nextval('public.ingredients_id_seq'::regclass);
 =   ALTER TABLE public.ingredients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16440    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2604    16541    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    208    208            H          0    16593    command 
   TABLE DATA           7   COPY public.command (id, "table", user_id) FROM stdin;
    public          postgres    false    212   �=       F          0    16555    custom_products 
   TABLE DATA           [   COPY public.custom_products (id, name, description, price, imgurl, command_id) FROM stdin;
    public          postgres    false    210   �=       I          0    16609    ingredient_custom 
   TABLE DATA           M   COPY public.ingredient_custom (ingredient_id, custom_product_id) FROM stdin;
    public          postgres    false    213   �=       A          0    16448    ingredients 
   TABLE DATA           K   COPY public.ingredients (price, name, id, description, imgurl) FROM stdin;
    public          postgres    false    205   �=       ?          0    16437    products 
   TABLE DATA           H   COPY public.products (id, name, description, price, imgurl) FROM stdin;
    public          postgres    false    203   A>       B          0    16490    rel_ids 
   TABLE DATA           <   COPY public.rel_ids (product_id, ingredient_id) FROM stdin;
    public          postgres    false    206   �>       D          0    16538    users 
   TABLE DATA           S   COPY public.users (id, user_name, user_password, category, user_email) FROM stdin;
    public          postgres    false    208   �>       U           0    0    command_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.command_id_seq', 1, false);
          public          postgres    false    211            V           0    0    custom_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.custom_products_id_seq', 1, false);
          public          postgres    false    209            W           0    0    ingredients_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.ingredients_id_seq', 3, true);
          public          postgres    false    204            X           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 10, true);
          public          postgres    false    202            Y           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 63, true);
          public          postgres    false    207            �
           2606    16494    rel_ids bill_product_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT bill_product_pkey PRIMARY KEY (product_id, ingredient_id);
 C   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT bill_product_pkey;
       public            postgres    false    206    206            �
           2606    16598    command command_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.command
    ADD CONSTRAINT command_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.command DROP CONSTRAINT command_pkey;
       public            postgres    false    212            �
           2606    16563 $   custom_products custom_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.custom_products
    ADD CONSTRAINT custom_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.custom_products DROP CONSTRAINT custom_products_pkey;
       public            postgres    false    210            �
           2606    16613 $   ingredient_custom cutom_product_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT cutom_product_pkey PRIMARY KEY (ingredient_id, custom_product_id);
 N   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT cutom_product_pkey;
       public            postgres    false    213    213            �
           2606    16456    ingredients ingredients_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.ingredients DROP CONSTRAINT ingredients_pkey;
       public            postgres    false    205            �
           2606    16445    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    203            �
           2606    16543    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    208            �
           2606    16552    users users_user_email_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_email_key;
       public            postgres    false    208            �
           2606    16545    users users_user_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);
 C   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_name_key;
       public            postgres    false    208            �
           2606    16604    custom_products command_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.custom_products
    ADD CONSTRAINT command_id FOREIGN KEY (command_id) REFERENCES public.command(id) ON UPDATE CASCADE ON DELETE RESTRICT NOT VALID;
 D   ALTER TABLE ONLY public.custom_products DROP CONSTRAINT command_id;
       public          postgres    false    2743    212    210            �
           2606    16619 :   ingredient_custom ingredient_custom_custom_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT ingredient_custom_custom_product_id_fkey FOREIGN KEY (custom_product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 d   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT ingredient_custom_custom_product_id_fkey;
       public          postgres    false    203    213    2729            �
           2606    16614 6   ingredient_custom ingredient_custom_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredient_custom
    ADD CONSTRAINT ingredient_custom_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 `   ALTER TABLE ONLY public.ingredient_custom DROP CONSTRAINT ingredient_custom_ingredient_id_fkey;
       public          postgres    false    2731    213    205            �
           2606    16500 "   rel_ids rel_ids_ingredient_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT rel_ids_ingredient_id_fkey FOREIGN KEY (ingredient_id) REFERENCES public.ingredients(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT rel_ids_ingredient_id_fkey;
       public          postgres    false    206    2731    205            �
           2606    16495    rel_ids rel_ids_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rel_ids
    ADD CONSTRAINT rel_ids_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public.rel_ids DROP CONSTRAINT rel_ids_product_id_fkey;
       public          postgres    false    203    206    2729            �
           2606    16599    command user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.command
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 9   ALTER TABLE ONLY public.command DROP CONSTRAINT user_id;
       public          postgres    false    212    2735    208            H      x������ � �      F      x������ � �      I      x������ � �      A   =   x�3��3�,.�+�TH�O�I�4�,�S@���2AWd���$�,193_��(57?�+F��� )��      ?   Z   x�3�,N�K)�L�8���4O�gb�gl���e�Y\�W�	�3�2� 	��BJ~RN*\�5��(24�,-N-261�,(��4���qqq �H%E      B      x�3�4�2�4�2�1z\\\ P      D   b   x�33�����L��T1JR14P��s4q7()�+pO�ML)MOON�M5϶Hʎpu�wus3�pr1����w���L��4�L�M��q �z���\1z\\\ I�M     